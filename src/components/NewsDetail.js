// NewsDetail.js
import React, { Component } from 'react';

class NewsDetail extends Component {
  state = {
    newsDetails: null,
    loading: true,
  };

  async componentDidMount() {
    // Retrieve the newsId from the route parameters
    const { match } = this.props;
    const { params } = match;
    const { newsId } = params || {};
  
    // Check if newsId is available
    if (!newsId) {
      console.error('NewsId not found in URL parameters');
      this.setState({ loading: false });
      return;
    }
  
    // Fetch the details of the news with the specified ID
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1655eb1e745344ee895a3eb9975d4983&page=1&pageSize=1`);
      const data = await response.json();
  
      // Find the news article with the specified ID (using index)
      const newsDetails = data.articles[newsId];
  
      this.setState({ newsDetails, loading: false });
    } catch (error) {
      console.error('Error fetching news details:', error);
      this.setState({ loading: false });
    }
  }
  
  

  render() {
    const { newsDetails, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!newsDetails) {
      return <div>News not found</div>;
    }

    const { title, description, imageUrl, author, date, content } = newsDetails;

    return (
      <div className="container my-4">
        <h2>{title}</h2>
        <img src={imageUrl} className="img-fluid my-4" alt="News" />
        <p className="lead">{description}</p>
        <p>By {author} on {new Date(date).toDateString()}</p>
        <div className="my-4">{content}</div>
      </div>
    );
  }
}

export default NewsDetail;
