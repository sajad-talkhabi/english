const createFilterObject = filters => {
    let filterObject = {};
    for (const key in filters) {
        if (Object.hasOwnProperty.call(filters, key)) {
            if (filters[key] && typeof filters[key]["type"] !== "undefined") {
                let filterValue = window[filters[key]["type"]](filters[key]);
                if (filterValue) {
                    filterObject[key] = filterValue;
                }
            } else if (typeof filters[key] !== 'object') {
                filterObject[key] = filters[key];
            }
        }
    }
    filters = {};
    for (var filter in filterObject) {
        if (Object.hasOwnProperty.call(filterObject, filter)) {
            // filters[0] = {filter + ':' + filterObject[filter]}
            // filters = `{'${filter}':'${filterObject[filter]}'}`
            filters[`filters[${filter}]`] = filterObject[filter];
        }
    }
    // console.log(JSON.parse(filters));
    return filters;
};

window["between"] = function (filter) {
    var value = null;
    if (filter.val1 && filter.val2) {
        value = `<${filter.val1},${filter.val2}>`;
    } else if (filter.val1) {
        filter.val = filter.val1;
        value = window["greater"](filter);
    } else if (filter.val2) {
        filter.val = filter.val2;
        value = window["less"](filter);
    }
    return value;
};
window["greater"] = function (filter) {
    var value = null;
    if (filter.val) {
        value = `(ge)${filter.val}`;
    }
    return value;
};
window["less"] = function (filter) {
    var value = null;
    if (filter.val) {
        value = `(le)${filter.val}`;
    }
    return value;
};

window["like"] = function (filter) {
    var value = null;
    if (filter.val !== null) {
        value = `${filter.val}`;
    }
    return value;
};
window["in"] = function (filter) {
    var value = null;
    if (filter.val) {
        if (Array.isArray(filter.val)) {
            value = filter.val.join(",");
        } else {
            value = `${filter.val}`;
        }
    }
    return value;
};

export default createFilterObject;
