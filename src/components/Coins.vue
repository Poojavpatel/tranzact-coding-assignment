<template>
  <div>
  <v-data-table
    :headers="coinHeaders"
    :items="coins"
    :items-per-page="5"
    item-key="name"
    class="elevation-1"
  >
    <template v-slot:body="{ items }">
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td class="text-center">
            <img :src="item.iconUrl" width="30px" class="mx-3">
          </td>
          <td class="text-left"><strong>{{ item.name }}</strong></td>
          <td>{{ item.symbol }}</td>
          <td class="text-right">{{ item.price ? _.round(item.price, 3) : '-' }}</td>
          <td class="text-right">{{ item.change }}</td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
  </div>
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
          align: 'center',
          sortable: false,
          value: 'icon',
        },
        { text: 'Name', value: 'name' },
        { text: 'Symbol', value: 'symbol', align: 'center' },
        { text: 'Price', value: 'price', align: 'right' },
        { text: 'Price Change', value: 'change', align: 'right' },
      ],
      checking: false,
      heartbeats: [],
    };
  },
  computed: {
    _() {
      return _;
    },
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
