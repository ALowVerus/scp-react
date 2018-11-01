import React, { Component } from 'react';
import axios from 'axios';
import Disqus from 'disqus-react';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_id: "",
      innerHTML: "",
      collapsibleToggles: [],
      pageTags: [],
      discussOpened: false
    };
    console.log(this.props.url);
  }

  componentDidMount() {
    console.log(this.props.url);
    // Grab actual page
    axios
      .get(
        this.props.db_address + "pages?url=" + this.props.url,
        {headers: {"Access-Control-Allow-Origin": "*"}}
      )
      .then(response => {
        this.setState({
          page_id: response.data[0].id,
          innerHTML: response.data[0].html,
          pageTags: response.data[1],
        });
        console.log(response);
        // Conform page to react standards
        this.sanitizePage();
        // Grab page rating
        this.grabAggregateRatings(response.data[0].id);
      })
      .catch(error => {
        this.setState({ innerHTML: "ERROR 404: Page not found." })
        console.log(error);
      });
  }

  grabAggregateRatings(page_id) {
    // axios
    //   .get(
    //     this.props.db_address + "ratings?url=" + this.props.url,
    //     {headers: {"Access-Control-Allow-Origin": "*"}}
    //   )
    //   .then(response => {
    //     this.setState({
    //       innerHTML: response.data[0].html,
    //       pageTags: response.data[1]
    //     });
    //     console.log(response);
    //     this.sanitizePage();
    //   })
    //   .catch(error => {
    //     this.setState({ innerHTML: "ERROR 404: Page not found." })
    //     console.log(error);
    //   });
  }

  sanitizePage() {
    // SANITIZE YUIs
    // Check for yui boxes, evade the null scenario
    var yui_sets = document.getElementsByClassName('yui-navset');
    if (yui_sets !== null) {
      let yui_set, yui_nav_ul, yui_nav, yui_content;
      // Iterate through the navs of each set to find the active tabs
      for (var yui_set_count = 0; yui_set_count < yui_sets.length; yui_set_count ++) {
        yui_set = yui_sets[yui_set_count];
        yui_nav_ul = yui_set.getElementsByClassName('yui-nav')[0];
        yui_nav_ul.className = "yui-nav nav navbar-nav";
        yui_nav = yui_nav_ul.children;
        yui_content = yui_set.getElementsByClassName('yui-content')[0].children;
        // Give each nav and tab and appropriate ID for testing purposes
        for (var tab_count = 0; tab_count < yui_nav.length; tab_count ++) {
          yui_nav[tab_count].onclick = (event) => { this.updateTabs(event); }
          yui_nav[tab_count].id = "nav-"+ yui_set_count.toString() + "-" + tab_count.toString()
          yui_nav[tab_count].innerHTML = yui_nav[tab_count].textContent;
          yui_content[tab_count].id = "content-"+ yui_set_count.toString() + "-" + tab_count.toString()
        }
      }
    }
    // SANITIZE COLLAPSIBLES
    var collapsibles = document.getElementsByClassName('collapsible-block');
    if (collapsibles !== null) {
      let collapsible, collapsible_folded, collapsible_unfolded, links_folded, links_unfolded;
      for (var collapsible_count = 0; collapsible_count < collapsibles.length; collapsible_count ++) {
        collapsible = collapsibles[collapsible_count];
        collapsible.id = "collapsible-" + collapsible_count.toString();
        collapsible_folded = collapsible.getElementsByClassName("collapsible-block-folded")[0];
        collapsible_unfolded = collapsible.getElementsByClassName("collapsible-block-unfolded")[0];
        collapsible_folded.id = "collapsible-" + collapsible_count.toString() + "-folded";
        collapsible_unfolded.id = "collapsible-" + collapsible_count.toString() + "-unfolded";
        links_folded = collapsible_folded.getElementsByClassName("collapsible-block-link");
        links_unfolded = collapsible_unfolded.getElementsByClassName("collapsible-block-unfolded-link");
        for (let link_count = 0; link_count < links_folded.length; link_count ++) {
          links_folded[link_count].innerHTML = links_folded[link_count].textContent;
          links_folded[link_count].id = "folded-link-" + collapsible_count.toString() + "-" + link_count.toString();
          links_folded[link_count].onclick = (event) => { this.switchCollapse(event); };
        }
        for (let link_count = 0; link_count < links_unfolded.length; link_count ++) {
          var actual_link = links_unfolded[link_count].getElementsByClassName('collapsible-block-link')[0];
          actual_link.id = "unfolded-link-" + collapsible_count.toString() + "-" + link_count.toString();
          actual_link.onclick = (event) => { this.switchCollapse(event); };
        }
        const newCollapsibleToggles = this.state.collapsibleToggles;
        newCollapsibleToggles.push(false);
        this.setState({ collapsibleToggles: newCollapsibleToggles });
      }
    }
  }

  updateTabs(event){
    event = event || window.event; // IE
    var target = event.target || event.srcElement; // IE
    var target_id_sanitized = target.id.split("-");
    var yui_index = target_id_sanitized[1];
    var tab_index = target_id_sanitized[2];
    // Get all yuis
    var yui_sets = document.getElementsByClassName('yui-navset');
    let yui_set, yui_nav, yui_content
    yui_set = yui_sets[yui_index];
    yui_nav = yui_set.getElementsByClassName('yui-nav nav navbar-nav')[0].children;
    yui_content = yui_set.getElementsByClassName('yui-content')[0].children;
    // Identify the current active tab
    var current_tab_found = false;
    var old_index = -1;
    while (current_tab_found === false) {
      old_index += 1;
      if (yui_nav[old_index].className === "selected") {
        current_tab_found = true;
      }
    }
    // Identify the new and old navs and contents
    var yui_nav_old = yui_nav[old_index]
    var yui_nav_new = yui_nav[tab_index]
    var yui_content_old = yui_content[old_index]
    var yui_content_new = yui_content[tab_index]
    // Give the new and old navs and contents their appropriate attributes
    yui_nav_old.className = "";
    yui_nav_new.className = "selected";
    yui_content_old.style = "display:none";
    yui_content_new.style = "";
  }

  switchCollapse(event) {
    event = event || window.event; // IE
    var target = event.target || event.srcElement; // IE
    var collapsible_index = target.id.split("-")[2];
    var collapsible_folded = document.getElementById("collapsible-" + collapsible_index.toString() + "-folded");
    var collapsible_unfolded = document.getElementById("collapsible-" + collapsible_index.toString() + "-unfolded");
    if (this.state.collapsibleToggles[collapsible_index] === true) {
      collapsible_folded.style = "display:block";
      collapsible_unfolded.style = "display:none";
      const newCollapsibleToggles = this.state.collapsibleToggles;
      newCollapsibleToggles[collapsible_index] = false;
      this.setState({ collapsibleToggles: newCollapsibleToggles });
    } else {
      collapsible_folded.style = "display:none";
      collapsible_unfolded.style = "display:block";
      const newCollapsibleToggles = this.state.collapsibleToggles;
      newCollapsibleToggles[collapsible_index] = true;
      this.setState({ collapsibleToggles: newCollapsibleToggles });
    }
  }

  discussClicked() {
    var discussion = document.getElementById('discussion');
    if (this.state.discussOpened === true) {
      discussion.style = "";
      this.setState({ discussOpened: false });
    } else {
      discussion.style = "display:block";
      this.setState({ discussOpened: true });
    }
  }

  render() {
    const disqusShortname = 'example';
    const disqusConfig = {
        url: window.location.href,
        identifier: this.props.url,
        title: this.props.url,
    };
    return (
      <div className="Page">
        <div className="Page-html col-12" dangerouslySetInnerHTML={{__html:this.state.innerHTML}} />
        <div className="Page-footer">
          <div className="d-flex flex-wrap justify-content-around">
            {this.state.pageTags.map(function(pageTag){return(
              <div className="pd-2" key={pageTag.id}>
                {pageTag.name} /
              </div>
            )})}
          </div>
          <div className="d-flex justify-content-center" >
            <div className="p-2" onClick={() => this.discussClicked()}>
              <button type="button" className="btn btn-link">
                Discuss
              </button>
            </div>
            <div className="p-2">
              <button type="button" className="btn btn-link">
                Rate
              </button>
            </div>
            <div className="p-2">
              <button type="button" className="btn btn-link">
                Edit
              </button>
            </div>
          </div>
          <div className="Discussion col-md-8 mx-auto" id="discussion">
            <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
              Comments
            </Disqus.CommentCount>
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          </div>
          <div className="d-flex justify-content-around App">
            <div className="p-2">
              Unless otherwise stated, the content
              of this page is licensed under <br />
              <a href="http://creativecommons.org/licenses/by-sa/3.0/"
              target="_blank" rel="noopener noreferrer">
                Creative Commons Attribution-ShareAlike 3.0 License.
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page
