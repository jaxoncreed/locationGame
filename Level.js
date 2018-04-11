import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { TileMap } from 'react-game-kit/native';


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

export default class Level extends Component {
  static contextTypes = {
    scale: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      stageX: 0,
    };
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // const targetX = Math.round(GameStore.stageX * nextContext.scale);
    // this.setState({
    //   stageX: targetX,
    // });
  }

  componentWillUnmount() {
    this.cameraWatcher();
  }

  getWrapperStyles() {
    return {
      position: 'absolute',
      transform: `translate(${this.state.stageX}px, 0px) translateZ(0)`,
      transformOrigin: 'top left',
    };
  }

  randTile(min, max) {
    return tiles[0];
  }

  render() {
    console.log(tiles);
    return (
      <View style={{
        translateX: this.state.
      }}>
        <TileMap
          src={require("./assets/rubixcube2.png")}
          sourceWidth={50}
          tileSize={50}
          columns={20}
          rows={20}
          renderTile={(tile, src, styles) => {
            if (tile.index === 1) {
              console.log(this.randTile());
              return (
                <Image
                  resizeMode="cover"
                  style={styles}
                  source={this.randTile()}
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
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
              1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
              1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
              1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1,
              1, 0, 0, 1, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
              1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1,
              1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
              1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
              1, 0, 2, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1,
              1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
              1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
              1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1,
              1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1,
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1,
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
          ]}
        />
      </View>
    );
  }
}
