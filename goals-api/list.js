
import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
    let params = {
        TableName: "userGoals",
        //Define the key
        KeyConditionExpression: "userId = :userId",
        //Define the attribute value
        ExpressionAttributeValues: {
            ":userId" : "123",
        }
    };

    try {
        let data = await dynamoDb.query(params).promise();
        return {
            statusCode: 200,
            //return the items as the response
            body: JSON.stringify(data.Items),
        };
    }
    catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: e.message }),
        };
    }
}

