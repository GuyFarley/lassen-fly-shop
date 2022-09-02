# Lassen Fly Shop - AWS/Next.js

## Author

Guy Farley

## Problem Domain

The purpose of this simple eCommerce-style application is to deepen my understanding and skillset in two areas:

1. Use of the **Next.js** framework to build a front end application. Primary goals:
    - Become familiar with navigation between *pages* using the `<Link>` component
    - Increase my knowledge of built-in support for CSS and Sass in Next.js
    - Make use of pre-rendering and data fetching
    - Implement dynamic routes to render an item-specific page based on user's selection

2. Use of specific **AWS** tools for data management on the back end. Primary goals:
    - To set up an HTTP API through which the front end application can request data
    - To incorporate an AWS Lambda function that will be triggered by front end
    - To store and retreive data from a DynamoDB, sending data back to front end application

## How to Run This Application

Site is deployed @ <https://lassen-fly-shop.netlify.app>

## Features / Routes

- GET requests occur within the AWS API Gateway, which trigger the Lambda function to retreive all item data from DynamoDB. This happens at buildtime, to ensure the browser does not handle the data fetch.
- When a user clicks the name of one of the items on the home page, a dynamic route is created to render specific information on that item within a separate page. This includes a full description, pricing, and a larger photo of the item

## Challenges & Constraints

- Challenge: Fetching data from the AWS backend within the constraints of Next.js
  - Since components are pre-rendered in Next.js framework, this data fetch cannot happen in the browser. Instead, the data needs to be fetched at buildtime
  - This happens differently than it would in a standard React application. The data fetch needed to be called inside the getStaticProps function, which runs at buildtime
  - At this point, the data that is sent back from AWS is captured in an object and passed along as props to the Home page (component) for rendering

<!-- ## Learnings

## Tests -->

## Visual Documentation

### Wireframe

Before determining the data flow of my application, I first created a wireframe to help visualize how the final application would appear to the end user. This was the first step in determining how the app would function, as it required me to think through the user's experience and how they would be best served by the architecture.

It was at this point that I decided it would be best to pull data for all fly items from the DB upon initial page load (I did not yet realize it needed to happen before initial page load) so that the data would be available for pre-rendering of the item-specific pages. This would ensure the information (including photos) would be locked and loaded to ensure the user would not need to wait for that data to load when they visited each item's specific page.

This also ensured that the API would only need to be hit once during the user's visit, which would help keep costs down.

![wireframe for Lassen Fly Shop](./public/lassen_wireframe.jpg)

### Web Request/Response Cycle

![web request & response cycle for Lassen Fly Shop](./public/lassen_wrrc.png)

## Links and Resources

Wireframing and Web Request/Response Cycle: <https://miro.com/app/board/uXjVPbIEoBA=/?share_link_id=781844634355>

<https://nextjs.org/docs/getting-started>

<https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html>

<https://www.youtube.com/watch?v=zueyEdRZQlk>
