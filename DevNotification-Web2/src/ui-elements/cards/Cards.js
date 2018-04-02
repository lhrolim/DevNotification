import React from 'react'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/cards.css'

const Cards = () => (
  <div>
    <div className="row">
      <div className="col">
        <Widget
          title="Cards"
          description="Use the following examples as starting points for cards">
          <div className="row">
            <div className="col">
              <div className="card-columns">
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                <div className="card card-with-badge">
                  <span className="badge badge-danger badge-sm">New</span>
                  <img
                    className="card-img-top img-fluid"
                    src="/assets/images/card-1.jpg"
                    alt="card"
                  />
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-actions">
                      <span>Like</span>
                      <i className="fa fa-thumbs-o-up" />
                      <span>Comment</span>
                      <i className="fa fa-comment" />
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">Featured</div>
                  <img
                    className="card-img-top img-fluid"
                    src="/assets/images/card-2.jpg"
                    alt="card"
                  />
                  <div className="card-block">
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-actions">
                      <span>Reply</span>
                      <i className="fa fa-mail-reply" />
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top img-fluid"
                    src="/assets/images/card-3.jpg"
                    alt="card"
                  />
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-actions">
                      <button className="btn btn-primary">Do something</button>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="card-img-top img-fluid"
                    src="/assets/images/card-4.jpg"
                    alt="card"
                  />
                  <div className="card-block">
                    <div className="card-img-user">
                      <img
                        src="/assets/faces/m7.png"
                        className="rounded-circle"
                        alt="card"
                      />
                    </div>
                    <h4 className="card-title m-t-5">Card title</h4>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-actions">
                      <span>Like</span>
                      <i className="fa fa-thumbs-o-up" />
                      <span>Comment</span>
                      <i className="fa fa-comment" />
                    </p>
                  </div>
                </div>
                <div className="card card-primary p-15">
                  <blockquote className="card-blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat.
                    </p>
                    <footer>
                      <small>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card card-secondary p-15">
                  <blockquote className="card-blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat.
                    </p>
                    <footer>
                      <small>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card card-info p-15">
                  <blockquote className="card-blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat.
                    </p>
                    <footer>
                      <small>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card card-success p-15">
                  <blockquote className="card-blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat.
                    </p>
                    <footer>
                      <small>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card card-warning p-15">
                  <blockquote className="card-blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat.
                    </p>
                    <footer>
                      <small>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card card-danger p-15">
                  <blockquote className="card-blockquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat.
                    </p>
                    <footer>
                      <small>
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card">
                  <div className="card-block">
                    This is some text within a card block.
                  </div>
                </div>
                <div className="card card-with-badge">
                  <span className="badge badge-warning badge-outline badge-sm">
                    Important
                  </span>
                  <img
                    className="card-img-top img-fluid"
                    src="/assets/images/card-1.jpg"
                    alt="card"
                  />
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-actions m-b-10">
                      <span>10</span>
                      <i className="fa fa-star-o" />
                      <span>23</span>
                      <i className="fa fa-heart-o" />
                    </p>
                    <small className="text-muted">5 minutes ago</small>
                  </div>
                </div>
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title m-b-15">Card title</h4>
                    <h6 className="card-subtitle text-muted">Card subtitle</h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a className="card-link">Card link</a>
                    <a className="card-link">Another link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
  </div>
)
export default Cards
