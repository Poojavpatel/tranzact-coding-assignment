<template>
  <v-data-table
    :headers="coinHeaders"
    :items="coins"
    :items-per-page="5"
    class="elevation-1"
  >
  <template slot="items" slot-scope="props">
    <td><img :src="props.item.iconUrl">{{ props.item}}</td>
    <td>{{ props.item }}</td>
    <td>{{ props.item.symbol }}</td>
    <td>{{ props.item.price }}</td>
    <td>{{ props.item.change }}</td>
  </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'Coins',
  data() {
    return {
      totalCoinCount: 0,
      coins: [],
      coinHeaders: [
        {
          text: 'Icon',
          align: 'start',
          sortable: false,
          value: 'iconUrl',
        },
        { text: 'Name', value: 'name' },
        { text: 'Symbol', value: 'symbol' },
        { text: 'Price', value: 'price' },
        { text: 'Price Change', value: 'change' },
      ],
      checking: false,
      heartbeats: [],
    };
  },
  async mounted() {
    const response = await axios.get('https://api.coinranking.com/v1/public/coins/?limit=100');
    if (response.data.data) {
      this.totalCoinCount = _.get(response.data.data, 'stats.total', 0);
      this.coins = _.get(response.data.data, 'coins', []);
    }
  },
  methods: {
  },
};
</script>
