import React from "react";
import "./style.css";
const App = () => {
  return (
    <div>
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src="logo.png" width="145" height="27" alt="" />
          </a>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src="logo.png" width="145" height="27" alt="" />
              </a>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
              >
                <img name="close-outline" aria-hidden="true" />
              </button>
            </div>

            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#" className="navbar-link title-sm" data-nav-link>
                  Home
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link title-sm" data-nav-link>
                  Courses
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link title-sm" data-nav-link>
                  Blog
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link title-sm" data-nav-link>
                  Contacts
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="nav-open-btn"
            aria-label="open menu"
            data-nav-toggler
          >
            <img name="menu-outline" aria-hidden="true" />
          </button>

          <div className="overlay" data-overlay data-nav-toggler></div>
        </div>
      </header>

      <main>
        <article>
          <section
            className="section hero has-bg-image"
            aria-labelledby="hero-label"
            style={{ backgroundImage: "url(hero-bg.png)" }}
          >
            <div className="container">
              <div className="hero-content">
                <h1 className="headline-lg" id="hero-label">
                  e-learning <span className="span">ACE engineering </span>{" "}
                  college
                </h1>
                <p className="title-md has-before">
                  It is long established fact that reader distracted by the
                  readable content.
                </p>
                <div className="btn-group">
                  <a href="/login" className="btn btn-primary">
                    Get Started Now
                  </a>
                </div>
              </div>
              <figure className="hero-banner">
                <img
                  src="img.png"
                  width="590"
                  height="620"
                  alt="hero banner"
                  className="w-100"
                />
              </figure>
            </div>
          </section>

          <section
            className="section category has-bg-image"
            aria-labelledby="category-label"
            style={{ backgroundImage: "url(category-bg.png)" }}
          >
            <div className="container">
              <p
                className="title-sm text-center section-subtitle"
                id="category-label"
              >
                Course Categories
              </p>
              <h2 className="headline-md text-center section-title">
                Browse Top <span className="span has-after">Categories</span>
              </h2>
              <ul className="grid-list">
                <li>
                  <div className="card category-card">
                    <div className="card-icon">
                      <img
                        src="database.png"
                        width="72"
                        height="72"
                        loading="lazy"
                        alt="Data Science icon"
                      />
                    </div>
                    <div>
                      <h3 className="title-lg">Data Base</h3>
                    </div>
                    <a
                      href="#"
                      className="layer-link"
                      aria-label="Data Science Category"
                    ></a>
                  </div>
                </li>

                <li>
                  <div className="card category-card">
                    <div className="card-icon">
                      <img
                        src="os.png"
                        width="72"
                        height="72"
                        loading="lazy"
                        alt="UI/UX Design icon"
                      />
                    </div>
                    <div>
                      <h3 className="title-lg">Operating System</h3>
                    </div>
                    <a
                      href="#"
                      className="layer-link"
                      aria-label="UI/UX Design Category"
                    ></a>
                  </div>
                </li>

                <li>
                  <div className="card category-card">
                    <div className="card-icon">
                      <img
                        src="bussiness.png"
                        width="72"
                        height="72"
                        loading="lazy"
                        alt="Modern Physics icon"
                      />
                    </div>
                    <div>
                      <h3 className="title-lg">
                        Business Economics and Financial Analysis
                      </h3>
                    </div>
                    <a
                      href="#"
                      className="layer-link"
                      aria-label="Modern Physics Category"
                    ></a>
                  </div>
                </li>

                <li>
                  <div className="card category-card">
                    <div className="card-icon">
                      <img
                        src="software.png"
                        width="72"
                        height="72"
                        loading="lazy"
                        alt="Music Production icon"
                      />
                    </div>
                    <div>
                      <h3 className="title-lg">Software engineering</h3>
                    </div>
                    <a
                      href="#"
                      className="layer-link"
                      aria-label="Music Production Category"
                    ></a>
                  </div>
                </li>

                <li>
                  <div className="card category-card">
                    <div className="card-icon">
                      <img
                        src="dmaths.png"
                        width="72"
                        height="72"
                        loading="lazy"
                        alt="Data Science icon"
                      />
                    </div>
                    <div>
                      <h3 className="title-lg">Discrete maths</h3>
                    </div>
                    <a
                      href="#"
                      className="layer-link"
                      aria-label="Data Science Category"
                    ></a>
                  </div>
                </li>

                <li>
                  <div className="card category-card">
                    <div className="card-icon">
                      <img
                        src="aptitute.png"
                        width="72"
                        height="72"
                        loading="lazy"
                        alt="Finances icon"
                      />
                    </div>
                    <div>
                      <h3 className="title-lg">Aptitude</h3>
                    </div>
                    <a
                      href="#"
                      className="layer-link"
                      aria-label="Finances Category"
                    ></a>
                  </div>
                </li>
              </ul>

              <a href="#" className="btn btn-primary">
                View All Categories
              </a>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default App;
