const client = require('../../config/postgresql');
const onTime = require('../../service/on_time');
const uuid = require('uuid/v4');

module.exports = function createNotification(data) {
    return new Promise((resolve, reject) => {
        // console.log(data);
        const query = {
            text: 'INSERT INTO reports(id, target_id, description, image_url, is_open, created_by, modified_by, created, modified) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            values: [uuid(), data.targetID, data.description, data.imageURL, data.beachClean, data.createdBy, data.modifyBy, onTime(), onTime()],
        }
        client.query(query, (err, res) => {
            let result = {};
            if (err) {
                console.log(err.stack);
                result.status = "建立淨灘通報失敗！";
                result.err = "伺服器錯誤。";
                reject(err);
            } else {
                result.status = "建立淨灘通報成功！";
                result.data = data;
                resolve(result);
            }
        })
    })
}