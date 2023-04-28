import React, { Component, Fragment } from "react";

class MegaMenuMobile extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    this.MegaMenu();
  }

  MegaMenu() {
    var acc = document.querySelectorAll(".accordionMobile");
    var accNum = acc.length;
    var i;
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        console.log("ini");
        // var panel = this.nextElementSibling;
        // if (panel.style.maxHeight) {
        //   panel.style.maxHeight = null;
        // } else {
        //   panel.style.maxHeight = panel.scrollHeight + "px";
        // }
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
  render() {
    return (
      <div className='accordionMenuDivMobile'>
        <div className='accordionMenuDivinsideMobile'>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionMobile d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconMobile'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelMobile'>
            <ul>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemMobile'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenuMobile;
