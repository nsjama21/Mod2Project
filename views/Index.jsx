const React = require("react")
const DefaultLayout = require("./layout/Default")

class Index extends React.Component {
  render() {
    const  { reviews } = this.props
    return (
      <DefaultLayout title="Reviews Index Page">
        <nav>
          <a href="/api/reviews/new">Create Reviews</a>
        </nav>
        <ul>
          {
            reviews.map((review, i) => {
              return (
                <li> 
                  
                  <a href={`/api/reviews/${review._id}`}>{review.title}</a>
                 
                  is {review.review} <br />
                
                  <br />
                  <a href={`/api/reviews/${review._id}/edit`}>Edit This Review</a>
                  <form action={`/api/reviews/${review._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                  </form>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  } 
}

module.exports = Index