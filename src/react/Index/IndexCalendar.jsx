import React from "react";

class IndexCalendar extends React.Component {
  render() {
    return (
          <div className="index-content-text">
            <div className="index-content-text-lines">
              <p>Twitter Spaces Schedule</p>
                <p>WED at 8:00pm EST</p>
                <p>FRI & SAT at 9:00pm EST</p>
                <p>SUN at 12:00pm EST</p>
            </div>
            <div className="calendar">
              <div className="days">
                <div className="weekdays">
                  <div>Mo</div>
                  <div>Tu</div>
                  <div>We</div>
                  <div>Th</div>
                  <div>Fr</div>
                  <div>Sa</div>
                  <div>Su</div>

                </div>
              </div>
              <div className="numbers">
                <div className="week">  
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                </div>  
                <div className="week">  
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                </div>  
                <div className="week">  
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                </div>  
                <div className="week">  
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                  <div>25</div>
                  <div>26</div>
                  <div>27</div>
                  <div>28</div>
                </div>  
                <div className="lastWeek">  
                  <div>29</div>
                  <div>30</div>
                  <div>31</div>
                  <div>  </div>
                  <div>  </div>
                  <div>  </div>
                  <div>  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }

}


export default IndexCalendar;
