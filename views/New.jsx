const React = require("react")
const DefaultLayout = require("./layout/Default")

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New TV Show Review Page">
        <nav>
          <a href="/api/reviews">Home Page</a>
        </nav>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/api/reviews" method="POST">
          Title: <input type="text" name="title" /><br />
          Review: <input type="text" name="review" /><br />
          PosterURL: <input type="text" name="posterURL"/><br />
          <input type="submit" value="Create Review" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New