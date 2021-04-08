import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: "userGoals",
        Key: {
            userId: data.userId,
            goalId: data.goalId,
        },
    };

    try {
        await dynamoDb.delete(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(params),
        };
    }

    catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({error: e}),
        };
    }

}