const contentNode = document.getElementById("contents");

class IssueFilter extends React.Component {
  render() {
    return <div>This is a placeholder for issue filter</div>;
  }
}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.completion ? issue.completionDate.toDateString() : ""}</td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const issueRows = this.props.issues.map(issue => (
      <IssueRow key={issue.id} issue={issue} />
    ));
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return <div>This is a placeholder for an Issue Add entry form</div>;
  }
}

const issues = [
  {
    id: 1,
    status: "opened",
    owner: "Phyllis",
    created: new Date("2019-04-19"),
    effort: 4,
    completionDate: undefined,
    title: "Error in console when clicking add"
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Atieno",
    created: new Date("2019-05-09"),
    effort: 17,
    completionDate: new Date("2019-01-10"),
    effort: 23,
    completionDate: new Date("2019-03-30"),
    title: "Missing border on bottom panel"
  }
];
class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: issues };
    setTimeout(this.createTestIssue.bind(this), 2000);
  }
  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssues);
    this.setState({ issues: newIssues });
  }
  createTestIssue() {
    this.createIssue({
      status: "New",
      owner: "Phyllis",
      created: new Date(),
      title: "Completion date should be optional"
    });
  }

  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd />
      </div>
    );
  }
}
ReactDOM.render(<IssueList />, contentNode);
