const router = require("express").Router();
const Word = require("../models/Word");
const Filter = require("./filter")
router.get("/", async (req, res) => {
    try {
        // let page = parseInt(req.query.page) || 1;
        // let per_page = parseInt(req.query.per_page) || 12;
        // let words;
        // if (!req.query.filters) {
        //     words =
        //         await Word.find({ $text: { $search: "fur" } }).sort({ title: 1 })
        //             .limit(per_page).skip((page * per_page) - per_page);
        // } else {
        //     let filters = req.query.filters
        //     // let filters = JSON.parse(req.query.filters)
        //     console.log(typeof filters.title);
        //     // {
        //     //     title: { $text: { $search: filters.title } },
        //     //     description: filters.description,
        //     //     relations: { $in: filters.relations }
        //     // }
        // words =
        //     await Word.find({ $text: { $search: "fru" } },).sort({ created_at: -1 })
        //         .limit(per_page).skip((page * per_page) - per_page);
        // }
        // let wordCount = await words.length;
        // if (wordCount < per_page) per_page = wordCount;
        // let paginate = {
        //     page,
        //     pageStop: (page * per_page),
        //     pageStart: (page * per_page) - per_page + 1,
        //     pageCount: Math.ceil(wordCount / per_page),
        //     itemsLength: wordCount,
        //     itemsPerPage: per_page,
        // };
        // res.status(200).json({
        //     data: words,
        //     // meta: paginate
        // });
        let sorts = req.query.sorts;
        let sort;
        sorts.map(x => {
            sort = x
        })
        const options = {
            page: 1,
            limit: 10,
            sort: { sort: 1 },
        };
        // let words = Word.find({});
        let filters = req.query.filters;
        // console.log(sorts);
        let query = {
            // relations: { $in: filters?.relations.split(',') },
        }
        // perfect way but wrong
        // Object.keys(filters).map(key => {
        //     Object.entries(filters).map(x => {
        //         // console.log(x, key,);
        //         let val;
        //         let y = x.find(find => {
        //             return find === key
        //         })
        //         // console.log('y', x[1]);
        //         query[y] = x[1];
        //         delete query['undefined']
        //         console.log('q', query);
        //     })
        // })
        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }
        // Object.entries(filters).map(x => {
        // query[x[0]] = x[1];
        // if (query[x[0]].includes(',')) {
        //     // console.log(query[x[0]],'f');
        //     let key = getKeyByValue(query, x[1]);
        //     // console.log(key);
        //     query[key] = { $in: query[key].split(',') }
        //     // console.log(query[x[0]], x[1]);
        // } else if (x[0] == 'title') {
        //     // let key = getKeyByValue(query, x[1]);
        //     query['$text'] = { $search: x[1] }
        //     delete query['title']
        //     // query[key] ==
        // }
        // });
        // good way without clean code
        // if (filters['title']) {
        //     query['$text'] = { $search: filters['title'] }
        //     // delete query['title']
        // }
        // if (filters['relations']) {
        //     query['relations'] = { $all: filters['relations'].split(',') }
        // }
        // test 3
        let $searchable = ['title|like', 'relations|in'];
        let searchableColumn = [];
        $searchable.map(x => searchableColumn.push(x.split('|')[0]))
        let keys = Object.keys(filters);
        let $filterable = searchableColumn.filter(item => keys.includes(item));
        let x = $searchable.filter((x, index) => {
            $filterable.map(column => {
                if (x.indexOf(column) > -1) {
                    let type = $searchable[index].split('|')[1];
                    query = Filter({ filters, column, type });
                    console.log('query', query);
                }
            }) 
        })
        // console.log(searchableColumn, $filterable, keys, x);

        console.log('q', query);
        Word.paginate(query, options, function (err, result) {
            // result.docs
            // result.totalDocs = 100
            // result.limit = 10
            // result.page = 1
            // result.totalPages = 10
            // result.hasNextPage = true
            // result.nextPage = 2
            // result.hasPrevPage = false
            // result.prevPage = null
            // result.pagingCounter = 1
            // console.log(result);
            res.status(200).json({
                data: result.docs,
                meta: {
                    totalDocs: result.totalDocs,
                    limit: result.limit,
                    page: result.page,
                    totalPages: result.totalPages,
                    hasNextPage: result.hasNextPage,
                    nextPage: result.nextPage,
                    hasPrevPage: result.hasPrevPage,
                    prevPage: result.prevPage,
                    pagingCounter: result.pagingCounter,
                }
            });
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            errors: {
                title: 'Error',
                error: err
            }
        });
    }
});
router.post('/', (req, res, next) => {
    try {
        const newWord = new Word({
            title: req.body.title,
            description: req.body.description,
            relations: req.body.relations
        });
        newWord.save((err, data) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    errors: {
                        title: 'Error',
                        error: 'error add word'
                    }
                })
            }
            return res.status(201).json({
                data: {
                    _id: data._id,
                    title: req.body.title || data.title,
                    description: req.body.description || data.description,
                    relations: req.body.relations || data.relations,
                    created_at: new Date()
                },
                message: {
                    title: 'Success',
                    content: 'add word successfully'
                }
            })
        })

    } catch (err) {
        return res.status(400).json({ error: err });
    }
});
// update word
router.put('/:wordId', async (req, res, next) => {
    try {
        let currentWord = await Word.findById(req.params.wordId);
        await currentWord.updateOne({
            title: req.body.title,
            description: req.body.description,
            relations: req.body.relations,
        });
        currentWord = await Word.findById(req.params.wordId);
        res.status(201).json({
            data: {
                _id: currentWord._id,
                title: currentWord.title,
                description: currentWord.description,
                relations: currentWord.relations,
                created_at: new Date()
            },
            message: {
                content: 'edit word successfully'
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            errors: {
                title: 'Error',
                error: err
            }
        });
    }
});
module.exports = router;