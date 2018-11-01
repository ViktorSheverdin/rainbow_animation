import React, {Component} from 'react';
import { Text, View, Image, Dimensions, StyleSheet, Easing, ImageBackground, Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Sprite from 'react-native-animated-sprite';
// 
export default class AnimationComponent extends Component {
	constructor(){
		super();
		this.state = {
			movement: new Animated.Value(0)
		}
	}

	componentDidMount() {
		this.animate()
	}
		// Animated.timing(this.state.movement, {
		// 	toValue: -200,
		// 	duration: 5000,
		// }).start(); 

    //}

    animate () {
    	this.state.movement.setValue(0)
    	Animated.timing(
    		this.state.movement, {
    			toValue: 1,
    			duration:10000,
    			easing: Easing.linear
    		}
    	).start(() => this.animate())
    }

	render() {

	// let movement = {
	// 	transform: [{translateX: this.state.movement}]
	// } 

	const movingMargin = this.state.movement.interpolate({
		inputRange: [0,0.5,1],
		outputRange: [-240,240,-240]
	})
	const movingCloud2 = this.state.movement.interpolate({
		inputRange: [0,0.5,1],
		outputRange: [240,-240,240]
	})

    const fadeIn = {
      0: {
        opacity: 0,
      },
      1: {
        opacity: 1,
      },
      2: {
        opacity: 0
      },
    };
    return (
    	<ImageBackground  style={styles.backgroundImg} source={require('./background2.jpg')}>
          <View style={styles.container}>
          <Animatable.View style={styles.sun} animation="bounceIn" iterationCount={999} direction="alternate" delay={200}>
          	<Image source={require('./sun.png')}/>
          </Animatable.View>

	      	<Animated.View style={{
	      		marginLeft: movingMargin,
	      		height: 42,
	      		width: 70,
	      		top: -110
	      	}}>
		      	<Animatable.View animation="fadeOut" iterationCount={999} duration={5000} delay={15000}>
		      		<Image style={styles.cloud} source={require('./cloud_clear.png')} resizeMode="contain"/>
		      	</Animatable.View>
	      	</Animated.View>
      	
	      	<Animated.View style={{
	      		marginLeft: movingCloud2,
	      		height: 42,
	      		width: 70,
	      		top: -90,
	      	}}>
		      	<Animatable.View animation="fadeIn" iterationCount={999} duration={5000} delay={5000}>
		      		<Image style={styles.cloud} source={require('./cloud_clear.png')} resizeMode="contain"/>
		      	</Animatable.View>
	      	</Animated.View>		

            <Animatable.View style={styles.TextBox} animation={fadeIn} iterationCount={999} direction="alternate" duration={5000} delay={200} style={styles.bottomContainer}>
              <Animatable.View style={styles.TextBox} animation={fadeIn} iterationCount={999} direction="alternate" duration={5000} delay={600} style={styles.middleContainer1}>
                <Animatable.View style={styles.TextBox} animation={fadeIn} iterationCount={999} direction="alternate" duration={5000} delay={1000} style={styles.middleContainer2}>
                  <Animatable.View style={styles.TextBox} animation={fadeIn} iterationCount={999} direction="alternate" duration={5000} delay={1400} style={styles.middleContainer3}>
                    <Animatable.View style={styles.TextBox} animation={fadeIn} iterationCount={999} direction="alternate" duration={5000} delay={1800} style={styles.middleContainer4}>
                      <Animatable.View style={styles.TextBox} animation={fadeIn} iterationCount={999} direction="alternate" duration={5000} delay={2200} style={styles.middleContainer5}>
                        <Animatable.View style={styles.TextBox} animation={fadeIn} iterationCount={999} direction="alternate" duration={5000} delay={2600} style={styles.middleContainer6}>
                          <Animatable.View style={styles.TextBox} animation={fadeIn} iterationCount={999} direction="alternate" duration={5000} delay={3000} style={styles.middleContainer7}>                        
                            <Animatable.Text style={styles.myText} animation="zoomIn" iterationCount={999} direaction="alternate" duration={5000} delay={2400}>HAPPY!</Animatable.Text>            
                          </Animatable.View>
                        </Animatable.View>
                      </Animatable.View>
                    </Animatable.View>
                  </Animatable.View>
                </Animatable.View>
              </Animatable.View>
            </Animatable.View>            
          </View>
      	</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  cloud: {
  	width: 70,
  	height: 42,
  	position: "relative",
  },
  backgroundImg: {
  	width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  square: {
        width: 120,
        height: 120,
        backgroundColor: '#00BCD4'
    },
  sun: {
  	position: 'relative',
  	width: 100,
  	height: 100,
  	right: 100,
  	bottom: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBox: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 200,
  },
  myText: {
    color: 'yellow',
    fontSize: 20,
    position: 'relative',
    left: 30,
    top: 50,
    fontWeight: 'bold'
  },
  topContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {
    flexDirection: 'column',
    top: -30,
  },
  middleContainer1 : {
    width: 300,
      height: 300,
      borderWidth: 20,
      borderColor: 'red',
      borderStyle: 'solid',
      borderTopLeftRadius: 150,
      borderTopRightRadius: 150,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
  },
  middleContainer2 : {
    width: 280,
      height: 280,
      borderWidth: 20,
      borderColor: 'orange',
      borderStyle: 'solid',
      borderTopLeftRadius: 140,
      borderTopRightRadius: 140,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
  },
  middleContainer3 : {
    width: 260,
      height: 260,
      borderWidth: 20,
      borderColor: 'yellow',
      borderStyle: 'solid',
      borderTopLeftRadius: 130,
      borderTopRightRadius: 130,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
  },
  middleContainer4 : {
    width: 240,
      height: 240,
      borderWidth: 20,
      borderColor: 'green',
      borderStyle: 'solid',
      borderTopLeftRadius: 120,
      borderTopRightRadius: 120,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
  },
  middleContainer5 : {
    width: 220,
      height: 220,
      borderWidth: 20,
      borderColor: '#4f92ff',
      borderStyle: 'solid',
      borderTopLeftRadius: 110,
      borderTopRightRadius: 110,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
  },
  middleContainer6 : {
    width: 200,
      height: 200,
      borderWidth: 20,
      borderColor: 'blue',
      borderStyle: 'solid',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
  },
  middleContainer7 : {
    width: 180,
      height: 180,
      borderWidth: 20,
      borderColor: '#8f18af',
      borderStyle: 'solid',
      borderTopLeftRadius: 90,
      borderTopRightRadius: 90,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
  },
  leftheart1: {
    width: 50,
    height:50,
    position: 'relative',
    top: 20,
    left: 50,
    borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: 'red',
      transform: [
      {rotate: '60deg'}]
  },
  rightheart1: {
    width: 50,
    height:50,
    position: 'relative',
    top: -30,
    left: 40,
    borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: 'red',
      transform: [
      {rotate: '-60deg'}]
  },
  heartBottom1: {
    width: 50,
    height: 100,
    top: -40,
    left: 45,
    position: 'relative',
    backgroundColor: '#ea98be'
  },
  leftCirc1: {
    width: 50,
      height: 50,
    position: 'relative',
      borderRadius: 25,
      backgroundColor: '#ea98be'
  },
  rightCirc1: {
    width: 50,
      height: 50,
    position: 'relative',
    bottom: 50,
    left:-50,
      borderRadius: 25,
      backgroundColor: '#ea98be'
  }
})