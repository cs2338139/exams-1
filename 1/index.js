const user = [
  { firstName: "John", lastName: "Doe", customerID: "001", note: "", profession: "engineer" },
  { firstName: "Alice", lastName: "", customerID: "002", note: "VIP customer", profession: "productOwner" },
  { firstName: "Jane", lastName: "Smith", customerID: "003", note: "", profession: "student" },
  { firstName: "Bob", lastName: "", customerID: "004", note: "Interested in collaboration", profession: "freelancer" },
  { firstName: "Charlie", lastName: "Brown", customerID: "005", note: "", profession: "systemAnalytics" },
  { firstName: "David", lastName: "", customerID: "006", note: "Recently registered", profession: "engineer" },
  { firstName: "Emily", lastName: "Clark", customerID: "007", note: "", profession: "freelancer" },
  { firstName: "Frank", lastName: "", customerID: "008", note: "Frequent visitor", profession: "productOwner" },
  { firstName: "Grace", lastName: "Davis", customerID: "009", note: "Special request", profession: "systemAnalytics" },
  { firstName: "Hank", lastName: "Wilson", customerID: "010", note: "", profession: "student" },
];

function sortUserName(user) {
  const newUsers = user.map((user) => {
    return `${user.firstName} ${user.lastName} ${user.customerID}`;
  });

  const sortedUser = newUsers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  console.log("sortUserName:", sortedUser);
  return sortedUser;
}

function sortByType(user) {
  const sortedUser = user.sort((a, b) => {
    const professionA = a.profession;
    const professionB = b.profession;
    if (professionA > professionB) return 1;
    if (professionA < professionB) return -1;
    return 0;
  });

  console.log("sortByType:", sortedUser);
  return sortedUser;
}

sortUserName(user);
sortByType(user);
