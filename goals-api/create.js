import * as uuid from "uuid";
import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: "userGoals",
        Item: {
            userId: "123",
            goalId: uuid.v1(),
            goalName: data.goalName,
            goalAchieveBy: data.achieveBy,
            completed: data.completed
        }
    };
    try {
        await dynamoDb.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: e.message }),
        };
    }
}