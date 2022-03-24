export default {
  methods: {
    formatId: (id: string): string => id.replace(/[^a-zA-Z0-9]/g, ''),
  },
}
