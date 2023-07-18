-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jobPlatform" TEXT,
    "companyName" TEXT,
    "companyPhone" TEXT,
    "companyEmail" TEXT,
    "jobName" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "jobResponsibility" TEXT NOT NULL,
    "jobRequirement" TEXT NOT NULL,
    "jobDesirableRequirement" TEXT,
    "jobBenefits" TEXT,
    "contractType" TEXT NOT NULL,
    "salary" TEXT,
    "recruiterName" TEXT,
    "recruiterPhone" TEXT,
    "recruiterEmail" TEXT,
    "feedback" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
