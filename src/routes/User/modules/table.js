

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


function processUserInfo2Table (user) {
    const arr = [];
    Object.keys(user).forEach((key) => {
        arr.push({ key, value: user[key] })
    });
    return arr;
}

export {
    columns as default,
    processUserInfo2Table
}