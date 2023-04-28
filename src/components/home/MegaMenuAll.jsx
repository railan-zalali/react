import React, { Component } from "react";

class MegaMenuAll extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    this.MegaMenu();
  }

  MegaMenu() {
    var acc = document.querySelectorAll(".accordionAll");
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
      <div className='accordionMenuDivAll'>
        <div className='accordionMenuDivinsideAll'>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 2
                </a>
              </li>
            </ul>
          </div>
          <button className='accordionAll d-block'>
            Mens Clothing &nbsp;
            <img
              className='accordionMenuIconAll'
              src='https://cdn.iconscout.com/icon/free/png-512/image-1438823-1214496.png?f=avif&w=256'
            />
          </button>
          <div className='panelAll'>
            <ul>
              <li>
                <a href='#' className='accordionItemAll'>
                  Mans T-Shirt 1
                </a>
              </li>
              <li>
                <a href='#' className='accordionItemAll'>
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

export default MegaMenuAll;
