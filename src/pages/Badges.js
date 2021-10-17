import React from "react";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import Skeleton from "react-loading-skeleton";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  fetchData = async () => {
    this.setState({ error: null, loading: true });
    try {
      const data = await api.badges.list();
      this.setState({ error: null, loading: false, data: data });
    } catch (error) {
      this.setState({ error: error, loading: false });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.loading === true) {
      return <Skeleton count={5} />;
    }

    if (this.state.error === true) {
      return `Error: ${this.state.error}`;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
