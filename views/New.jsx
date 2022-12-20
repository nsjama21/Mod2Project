const React = require("react")
const DefaultLayout = require("./layout/Default")

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New TV Show Page">
        <nav>
          <a href="/tvshows">Home Page</a>
        </nav>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/tvshows" method="POST">
          Title: <input type="text" name="title" /><br />
          Review: <input type="text" name="review" /><br />
          Positive: <input type="checkbox" name="positive"/><br />
          <input type="submit" value="Create Review" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New