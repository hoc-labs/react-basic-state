# React Basic State

The purpose of this lab is to learn how the React change detection algorithm works and what you need to do within your React component to ensure that a change to a state variable triggers a change detection and the screen is udpated to reflect the change.

## Overview

Modify the three components to update their state and display the new values on the screen.

#### NumState
Add an onChange event handler to the input element that modifies the value of the `num` state variable. After updating the `num` state variable, the screen should update to display the new value.
#### ArrayState
Add an onClick event handler to the button that adds a new number to the end of the array state variable `nums`. The screen should update to display the new array value after the number has been added. 

#### ObjectState
Add an onClick event handler to the button that updates the value of the firstName property of the state variable `user`. After it is modified, the screen should update to display the new value.