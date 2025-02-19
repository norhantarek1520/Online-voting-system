# Online-voting-system

## Description

This project aims to develop a robust and secure online platform for conducting elections efficiently.
The system will empower registered voters to vote electronically while ensuring data integrity and voter privacy.

## **Main Roles**

- Admin
- Voter
- Candidate
- Super-admin

## **Key Features:**

- Admins only have the right to add elections and add the candidates’ names, photos, and other personal info (those who are nominated for an election).
- Admins will register the voter’s name by verifying the voter through his identity proof (and then the admin will register the voter).
- Admins must add the date on which an election is going to end.
- Admins can add any number of candidates when a new election is announced.
- Admins can also view an election’s result by using the election ID.
- Admins can create and schedule elections with specific end dates.
- the voter is allowed to vote in a specific election. they can vote for the candidate only once, the system will not allow the user to vote a second time.
- Once a user has received the user ID and password from the admin, the user can log in and vote for a candidate from those who are nominated.
- A user can also view an election’s result.
- System automatically removes candidates from the system after the election concludes.

## **Main Entities:**

1. **`NationalIDCards`**
   - Stores data of all people in the country for verification.
2. **`Users`**
   - Stores all types of users: voters, candidates, admins, and super admins.
3. **`Elections`**
   - Stores information about elections.
4. **`Candidates`**
   - Stores information about candidates.
5. **`Votes`**
   - Stores votes cast by users in elections.
6. **`CandidateRequirements`**
   - Stores qualification requirements for candidates in each election.
7. **`ElectionHistory`**
   - Stores historical results of completed elections.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
