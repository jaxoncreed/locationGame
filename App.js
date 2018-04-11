/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Radar from 'react-native-radar';
import { Loop, Stage, World } from 'react-game-kit/native';
import { Dimensions, View, Image, Text } from 'react-native'
import { TileMap } from 'react-game-kit/native';

type Props = {};

const tiles = [
  require(`./assets/rubixcube1.png`),
  require(`./assets/rubixcube2.png`),
  require(`./assets/rubixcube3.png`),
  require(`./assets/rubixcube4.png`),
  require(`./assets/rubixcube5.png`),
  require(`./assets/rubixcube6.png`),
  require(`./assets/rubixcube7.png`),
  require(`./assets/rubixcube8.png`),
  require(`./assets/rubixcube9.png`),
]

const tape = require('./assets/tape.png');

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      playerLocation: {
        x: 500,
        y: 220
      },
      board: [
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [ 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [ 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [ 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [ 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1],
        [ 1, 0, 0, 1, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [ 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1],
        [ 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [ 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [ 1, 0, 2, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1],
        [ 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [ 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ],
      paused: false
    }
  }

  componentDidMount() {
    Radar.setUserId('1');
    Radar.getPermissionsStatus().then((status) => {
      console.log(status);
      Radar.requestPermissions(true);
      Radar.startTracking();

      // setInterval(() => {
      //   this.setState({
      //     playerLocation: {
      //       x: this.state.playerLocation.x,
      //       y: this.state.playerLocation.y - 2
      //     }
      //   })
      // }, 500);

      setTimeout(() => {
        this.setState({ 
          paused: true
        });
      }, 10000);

      setTimeout(() => {
        this.setState({ 
          paused: false
        });
      }, 13000);   
      

      // Radar.on('location', (result) => {
      //   if (!this.origin) {
      //     this.origin = {
      //       lat: result.location.latitude,
      //       long: result.location.longitude
      //     };
      //   }
        
      //   const hypotheticalLocation = {
      //     x: this.state.playerLocation.x + (result.location.longitude - this.origin.long),
      //     y: this.state.playerLocation.y + (result.location.latitude - this.origin.lat)
      //   }

      //   this.setState({ playerLocation: hypotheticalLocation });
  
      //   console.log(hypotheticalLocation);
      // });
    });
  }

  render() {
    let {width, height} = Dimensions.get('window');
    return (
      <Loop>
        <Stage
          style={{ backgroundColor: '#3a9bdc' }}
          height={height}
          width={width}  
        >
          <World>
            <View style={{
              position: 'absolute',
              width: 1000,
              height: 1050,
              top: -(this.state.playerLocation.y - (height / 2)),
              left: -(this.state.playerLocation.x - (width / 2)),
              backgroundColor: '#39ff14'
            }}>
              <TileMap
                src={require("./assets/rubixcube2.png")}
                sourceWidth={50}
                tileSize={50}
                columns={20}
                rows={21}
                renderTile={(tile, src, styles) => {
                  if (tile.index === 1) {
                    return (
                      <Image
                        resizeMode="cover"
                        style={styles}
                        source={tiles[0]}
                      />
                    );
                  }
                  console.log(styles);
                  return (
                    <Image
                      resizeMode="cover"
                      style={{
                        ...styles,
                        left: 0
                      }}
                      source={tape}
                    />
                  );
                }}
                layers={[
                  this.state.board.reduce((agg, item) => agg.concat(item), [])
                ]}
              />
              <Image
                resizeMode="contain"
                style={{
                  position: 'absolute',
                  height: 40,
                  width: 40,
                  top: this.state.playerLocation.y - 20,
                  left: this.state.playerLocation.x - 20
                }}
                source={require("./assets/80sman.png")}
              />
            </View>
          </World>
          {this.state.paused && <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }}
          >
            <Text>PAUSED</Text>
          </View>}
        </Stage>
      </Loop>
    );
  }
}
