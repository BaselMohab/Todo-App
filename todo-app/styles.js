import { StyleSheet } from 'react-native';  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        padding: 20,  
        backgroundColor: '#f5f5f5',   
    },  
    input: {  
        borderWidth: 1,  
        borderColor: '#ccc',  
        borderRadius: 8,  
        paddingVertical: 15,  
        paddingHorizontal: 12,  
        marginVertical: 10,  
        backgroundColor: '#ffffff',  
        elevation: 2,  
    },  
    todoContainer: {  
        padding: 12,  
        borderBottomWidth: 1,  
        borderBottomColor: '#ccc',  
        backgroundColor: '#ffffff',   
        borderRadius: 8,   
        marginVertical: 8,   
        elevation: 1,  
    },  
    todoText: {  
        fontSize: 18,  
        marginBottom: 5,  
        color: '#333',  
    },  
    done: {  
        textDecorationLine: 'line-through',  
        color: 'gray',  
    },  
    submitBtn: {  
        backgroundColor: '#007BFF',   
        width: '100%',  
        borderRadius: 8,  
        alignItems: 'center',  
        marginTop: 20,  
        paddingVertical: 15,  
        shadowColor: '#000',   
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.8,  
        shadowRadius: 3,  
        elevation: 5,   
    },  
    submitText: {  
        color: 'white',   
        fontSize: 20,   
        fontWeight: 'bold',  
    },  
    buttonsContainer: {  
        flexDirection: 'row',  
        justifyContent: 'space-between',  
        alignItems: 'center',  
        marginTop: 20,   
    },   
    todoDetailscontainer: {  
        padding: 20,  
        backgroundColor: '#f9f9f9',   
        borderRadius: 10,  
        shadowColor: '#000',   
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.5,  
        shadowRadius: 4,  
        elevation: 2,  
    },  
    title: {  
        fontSize: 24,  
        fontWeight: 'bold',  
        color: '#222',   
    },  
    comment: {  
        fontSize: 16,  
        marginTop: 10,  
        color: '#444',  
    },  
});  

export default styles;