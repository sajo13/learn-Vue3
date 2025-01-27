import AssignmentList from "./AssignmentList.js";

export default {
    components: {AssignmentList},

    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
        
        <form @submit.prevent="add" class="mt-5">
          <div class="border border-gray-600 text-black">
            <input v-model="newAssignment" placeholder="New Assignments ..." class="text-black p-2" />
            <button type="submit" class="bg-white text-black p-2 border-l"> Add </button>
          </div>
        </form>
    `,

    data() {
        return {
            assignments: [
                {name: 'Finish project', complete: false, id: 1},
                {name: 'Read Chapter 4', complete: false, id: 2},
                {name: 'Turn in Homework', complete: false, id: 3},
            ],

            newAssignment: ''
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });
            this.newAssignment = '';
        }
    }
}