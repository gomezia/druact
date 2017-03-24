import React from 'react';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-bootstrap';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const url = '/weather.json';
{/*const url = '/content.json';*/}

var styles = {
  paperStyle: {
    marginTop: 10,
    padding: 10,
  },
  condition: {
    color: '#1B4098',
  },
  temp: {
    fontSize: 18,
    color: '#1B4098',
  },
  icon: {
    textAlign: 'center',
  },
  weatherTitle: {
    color: '#1679B5',
  }
}

export default class Weather extends React.Component {
  constructor(){
      super();
      this.state = {
          weatherData: {}
      };
  };

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);

        var icon = '';
        if (json.fcst_day_0.icon == 'http://www.prevision-meteo.ch/style/images/icon/pluie-faible.png') {
          icon = './pluie-faible.svg  ';
        }
        else {
          icon = json.fcst_day_0.icon;
        }

        var data = {
          'city' : json.city_info.name,
          'country': json.city_info.country,
          'day_short': json.fcst_day_0.day_short,
          'date': json.fcst_day_0.date,
          'condition': json.fcst_day_0.condition,
          'icon': icon,
          'tmax': json.fcst_day_0.tmax,
          'tmin': json.fcst_day_0.tmin,
        };

        this.setState({
          weatherData: data,
        });
      });
  }

  render() {
    return (
        <div>
          <Paper style={styles.paperStyle}>
            <h4 style={styles.weatherTitle}>Weather</h4>
            { this.state.weatherData.date } - { this.state.weatherData.city}, { this.state.weatherData.country }          
            <div style={styles.condition}>{ this.state.weatherData.condition }</div>
            <p style={styles.temp}>{this.state.weatherData.tmin} / {this.state.weatherData.tmax}</p> 
            <p style={styles.icon}><img src={this.state.weatherData.icon} /></p>         
           </Paper>
        </div>
      );
  }
}