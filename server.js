const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("static"));
app.use(bodyParser.json());

const issues = [
  {
    id: 1,
    status: "opened",
    owner: "Phyllo",
    created: new Date("2019-10-01"),
    effort: 24,
    completionDate: undefined,
    title: "Error in console when clicking add"
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Leria",
    created: new Date("2019-08-25"),
    effort: 15,
    completionDate: new Date("2019-02-02"),
    title: "Missing border on bottom panel"
  }
];

app.get("/api/issues", (req, res) => {
  const metadata = { total_count: issues.length };
  res.json({ _metadata: metadata, records: issues });
});

app.post("api/issues", (req, res) => {
  const newIssue = req.body;
  newIssue.id = issues.length + 1;
  newIssue.created = new Date();
  if (!newIssue.status) newIssue.status = "New";

  issues.push(newIssue);

  res.json(newIssue);
});
app.listen(3000, () => {
  console.log("App started on port 3000");
});
