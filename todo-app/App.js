import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {

  const todoData =[
    {
      id: 1,
      title: 'Buy groceries',
    },
    {
      id: 2,
      title: 'Finitsh the task',
    },
    {
      id: 3,
      title: 'Go to the gym',
    },
    {
      id: 4,
      title: 'Take your whey protein',
    },
  ]


  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <Text style={styles.header}>TODO APP</Text>
        <Text style={styles.desc}>Manage and organize your daily tasks</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoList}>
        <FlatList
          data={todoData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.title}</Text>
              <Icon name="circle-o" size={30} color="green" />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todo:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 18,
    marginTop: 10,
    color: 'gray',
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
  },
  submitBtn: {
    backgroundColor: 'navy',
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 15,

  },
  submitText: {
    color: 'white', 
    fontSize: 20, 
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    margin: 20,
  },
  filterBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 12,
    paddingVertical:7,
    borderRadius: 10,
    width: '30%',
    justifyContent: "center",
    alignItems: "center",
  },
  filterText: {
    color: 'white', 
    fontSize: 20,
  },
  activeFilterBtn: {
    width: '30%',
    paddingHorizontal: 12,
    paddingVertical:7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  todoList: {
    width: '100%',
    paddingHorizontal: 20,
  },
  todoItem: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  todoText: {
    fontSize: 16,
    color: 'black',
    marginRight: 50,
  },
});



