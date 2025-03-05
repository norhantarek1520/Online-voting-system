-- CreateEnum
CREATE TYPE "EUserRoles" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'VOTER', 'CANDIDATE');

-- CreateEnum
CREATE TYPE "EUserStatus" AS ENUM ('ACTIVE', 'PENDING', 'DELETED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "EGender" AS ENUM ('FEMALE', 'MALE');

-- CreateEnum
CREATE TYPE "EMaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED');

-- CreateEnum
CREATE TYPE "ElectionStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "ECandidateStatus" AS ENUM ('ACTIVE', 'DISQUALIFIDE', 'WITHDRAWN');

-- CreateTable
CREATE TABLE "NationalIDCards" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nationalId" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gender" "EGender" NOT NULL,
    "maritalStatus" "EMaritalStatus" NOT NULL,
    "religion" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NationalIDCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "role" "EUserRoles" NOT NULL DEFAULT 'VOTER',
    "status" "EUserStatus" NOT NULL DEFAULT 'PENDING',
    "userNationalId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "platformLink" TEXT NOT NULL,
    "status" "ECandidateStatus" NOT NULL,
    "partyAffiliation" TEXT,
    "photoUrl" TEXT,
    "platform" TEXT,
    "experience" TEXT,
    "education" TEXT,
    "birthdate" TIMESTAMP(3),
    "contactInfo" TEXT,
    "isApproved" BOOLEAN DEFAULT false,
    "userId" TEXT NOT NULL,
    "electionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Election" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "votingStartDate" TIMESTAMP(3) NOT NULL,
    "votingEndDate" TIMESTAMP(3) NOT NULL,
    "status" "ElectionStatus" NOT NULL,
    "candidateRegistrationStart" TIMESTAMP(3) NOT NULL,
    "candidateRegistrationEnd" TIMESTAMP(3) NOT NULL,
    "resultsAnnouncedDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Election_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateRequirements" (
    "requirementId" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "education" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "electionId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CandidateRequirements_pkey" PRIMARY KEY ("requirementId")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "electionId" TEXT NOT NULL,
    "voterId" TEXT NOT NULL,
    "candidateId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectionHistory" (
    "id" TEXT NOT NULL,
    "electionId" TEXT NOT NULL,
    "winnerCandidateId" TEXT NOT NULL,
    "loserCandidatesId" TEXT[],
    "totalVotes" INTEGER NOT NULL,
    "resultDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ElectionHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NationalIDCards_nationalId_key" ON "NationalIDCards"("nationalId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_userNationalId_key" ON "User"("userNationalId");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_userId_key" ON "Candidate"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CandidateRequirements_electionId_key" ON "CandidateRequirements"("electionId");

-- CreateIndex
CREATE UNIQUE INDEX "ElectionHistory_electionId_key" ON "ElectionHistory"("electionId");

-- CreateIndex
CREATE UNIQUE INDEX "ElectionHistory_winnerCandidateId_key" ON "ElectionHistory"("winnerCandidateId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userNationalId_fkey" FOREIGN KEY ("userNationalId") REFERENCES "NationalIDCards"("nationalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateRequirements" ADD CONSTRAINT "CandidateRequirements_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionHistory" ADD CONSTRAINT "ElectionHistory_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectionHistory" ADD CONSTRAINT "ElectionHistory_winnerCandidateId_fkey" FOREIGN KEY ("winnerCandidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
