
import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
    let params = {
        TableName: "userGoals",
        //Define the key
        KeyConditionExpression: "userId = :userId",
        //Define the attribute value
        ExpressionAttributeValues: {
            ":userId" : event.requestContext.identity.cognitoIdentityId,
        }
    };

    try {
        let data = await dynamoDb.query(params).promise();
        return {
            statusCode: 200,
            //return the items as the response
            body: JSON.stringify(data.Items),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
        };
    }
    catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: e.message }),
        };
    }
}

