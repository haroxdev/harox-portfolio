import React, { Component } from "react";
import Clock from "../util components/clock";
import Status from "../util components/status";
import StatusCard from "../util components/status_card";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      status_card: false,
      visit_count: 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.initVisit();
  }

  initVisit = async () => {
    try {
      this.setState({ loading: true });
      const docRef = doc(db, "visitList", "visitid");
      await updateDoc(docRef, {
        visit: increment(1),
      });

      const visitInfo = await getDoc(docRef);
      const count = visitInfo.data().visit;
      this.setState({ visit_count: count });
      this.setState({ loading: false });
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className="main-navbar-vp absolute top-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-grey text-ubt-grey text-sm select-none z-50">
        <div
          tabIndex="10"
          className={
            "pl-3 pr-3 outline-none flex items-center  transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
          }
        >
          <span className="mr-2">Ubuntu Desktop </span>
          <span className="font-bold text-orange-500">
            {this.state.loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              this.state.visit_count
            )}
          </span>
        </div>
        <div
          tabIndex="0"
          className={
            "pl-2 pr-2 text-xs md:text-sm outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1"
          }
        >
          <Clock />
        </div>
        <div
          id="status-bar"
          tabIndex="0"
          onFocus={() => {
            this.setState({ status_card: true });
          }}
          // removed onBlur from here
          className={
            "relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 "
          }
        >
          <Status />
          <StatusCard
            shutDown={this.props.shutDown}
            lockScreen={this.props.lockScreen}
            visible={this.state.status_card}
            toggleVisible={() => {
              // this prop is used in statusCard component in handleClickOutside callback using react-onclickoutside
              this.setState({ status_card: false });
            }}
          />
        </div>
      </div>
    );
  }
}
