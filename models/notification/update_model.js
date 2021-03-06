const client = require('../../config/postgresql');

const onTime = require('../../service/on_time');

module.exports = function updateNotification(data) {
    return new Promise((resolve, reject) => {
        const query = {
            text: 'UPDATE reports SET target_id=($1), description=($2), image_url=($3), is_open=($4), modified_by=($5), modified=($6) WHERE id=($7)',
            values: [data.targetID, data.description, data.imageURL, data.isOpen, data.modifyBy, onTime(), data.id],
        }
        client.query(query, (err, res) => {
            let result = {};
            if (err) {
                console.log(err.stack);
                result.status = "通報資料修改失敗。";
                result.err = "伺服器錯誤。";
                reject(result);
            } else {
                result.status = "通報資料修改成功。"
                result.data = data;
                resolve(result);
            }
        })
    })
}