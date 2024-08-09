import React from "react";  
import { View, Text, TouchableOpacity } from "react-native";  
import { Ionicons } from '@expo/vector-icons';  
import styles from "../styles";  

const TodoItem = ({ todo, onRemove, onToggle, onPress }) => {  
    return (  
        <TouchableOpacity style={styles.todoContainer} onPress={onPress}>  
            <TouchableOpacity onPress={onPress}>   
                <Text style={[styles.todoText, todo.done && styles.done]}>{todo.title}</Text>  
            </TouchableOpacity>  
            <Text style={styles.comment}>{todo.comment}</Text>  
            <View style={styles.buttonsContainer}>  
                <TouchableOpacity onPress={() => onRemove(todo.id)}>  
                    <Ionicons name="trash-bin-outline" size={24} color="red" />  
                </TouchableOpacity>  
                <TouchableOpacity onPress={() => onToggle(todo.id)}>  
                    <Ionicons name={todo.done ? 'checkmark-circle' : 'ellipse-outline'} size={24} color={todo.done ? 'green' : 'gray'} />  
                </TouchableOpacity>  
            </View>  
        </TouchableOpacity>  
    );  
};  

export default TodoItem;