

const columns = [
    {
        title: 'Key',
        dataIndex: 'key'
    },
    {
        title: 'Value',
        dataIndex: 'value'
    }
];


function processRepoInfo2Table (repo) {
    const arr = [];
    Object.keys(repo).forEach((key) => {
        arr.push({ key, value: repo[key] })
    });
    return arr;
}

export {
    columns as default,
    processRepoInfo2Table
}