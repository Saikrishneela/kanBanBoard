readme_content = """# Task Board Application

A simple, interactive task board built with vanilla JavaScript that allows users to create, manage, and edit tasks with priority levels.

## Features

- **Add New Tasks**: Click the add button to open a modal for creating new tasks
- **Priority System**: Assign priority levels (P1, P2, P3) to tasks with visual indicators
- **Edit Tasks**: Toggle between locked/unlocked states to edit task descriptions
- **Interactive UI**: Clean modal interface with keyboard shortcuts
- **Real-time Updates**: Tasks are immediately displayed after creation

## How to Use

### Adding a Task
1. Click the "Add" button in the quick-action section
2. A modal will open with a textarea and priority selection
3. Type your task description in the textarea
4. Select a priority level by clicking on P1, P2, or P3 boxes
5. Press **Enter** to save the task
6. The modal will close and your task will appear in the task board

### Editing a Task
1. Find the task you want to edit in the task board
2. Click the lock icon (🔒) on the task
3. The lock will change to an unlock icon (🔓) and the textarea becomes editable
4. Make your changes to the task description
5. Click the unlock icon to save and lock the task again

### Priority Levels
- **P1**: High priority (Red indicator)
- **P2**: Medium priority (Orange indicator)  
- **P3**: Low priority (Green indicator)

## Code Structure

### Key Components

- **Modal System**: Handles opening/closing of the task creation modal
- **Task Management**: Creates, stores, and displays tasks in an array
- **Priority Selection**: Interactive priority boxes with visual feedback
- **Edit Functionality**: Toggle between locked/unlocked states for task editing
- **Event Handling**: Keyboard and click events for user interactions

### Main Functions

- `openModel()` / `closeModel()`: Control modal visibility
- `getSelectedClassPriority()`: Retrieves the currently selected priority
- `createTicket(ticket)`: Generates HTML for individual tasks
- `listTickets(tickets)`: Renders all tasks to the DOM
- `removeSelectedClassFromBox()` / `addSelectedClassToCurrentBox()`: Manage priority selection

## HTML Structure Expected

The JavaScript expects the following HTML elements:

```html
<!-- Quick action button -->
<div class="quick-action">
  <button class="add">Add Task</button>
</div>

<!-- Modal -->
<div class="model hide">
  <div class="right-section">
    <button class="close">×</button>
    <textarea placeholder="Enter task description..."></textarea>
    <div class="priority-filter">
      <div class="box">P1</div>
      <div class="box">P2</div>
      <div class="box">P3</div>
    </div>
  </div>
</div>

<!-- Task display area -->
<div class="ticket-section"></div>
```

## CSS Classes Used

- `.hide`: Hides the modal
- `.selected`: Marks selected priority box
- `.ticket-container`: Container for each task
- `.ticket-priority`: Shows priority color indicator
- `.locked`: Indicates locked/unlocked state

## Getting Started

1. Include the JavaScript code in your HTML file
2. Make sure your HTML structure matches the expected elements
3. Add appropriate CSS styling for the classes mentioned above
4. The application will initialize with 3 sample tasks

## Sample Tasks

The application comes with 3 pre-loaded sample tasks:
- Task 1 (Priority: P1)
- Task 2 (Priority: P2)  
- Task 3 (Priority: P3)

## Browser Compatibility

This application uses vanilla JavaScript and should work in all modern browsers that support:
- ES6 features (arrow functions, template literals)
- DOM manipulation methods
- Event listeners

## Future Enhancements

Potential improvements could include:
- Task deletion functionality
- Drag and drop reordering
- Local storage persistence
- Due date tracking
- Task categories/tags
- Search and filter capabilities

## License

This project is open source and available under the MIT License.
"""

# Save to file
with open('README.md', 'w') as f:
    f.write(readme_content)

print("README.md file created successfully!")
print("\nPreview of the README content:")
print("=" * 50)
print(readme_content[:1000] + "..." if len(readme_content) > 1000 else readme_content)
