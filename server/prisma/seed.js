const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

async function main() {
  const users = [
    {
      email: "admin@company.com",
      password: "Admin@123",
      role: "admin",
    },
    {
      email: "hr@company.com",
      password: "Hr@123",
      role: "hr",
    },
    {
      email: "teamlead@company.com",
      password: "Teamlead@123",
      role: "teamlead",
    },
    {
      email: "intern@company.com",
      password: "Intern@123",
      role: "intern",
    },
  ];

  for (const user of users) {
    const existing = await prisma.login.findUnique({
      where: { email: user.email },
    });

    if (existing) {
      console.log(`${user.email} already exists`);
      continue;
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    await prisma.login.create({
      data: {
        email: user.email,
        password: hashedPassword,
        role: user.role,
      },
    });

    console.log(`${user.role} created`);
  }

  console.log("All users created successfully.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });