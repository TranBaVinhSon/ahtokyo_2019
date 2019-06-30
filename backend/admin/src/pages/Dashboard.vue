<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">

      <div class="col-12">
        <chart-card title="Rescue work"
                    sub-title="24 Hours performance"
                    :chart-data="usersChart.data"
                    :chart-options="usersChart.options">
          <span slot="footer">
            <i class="ti-reload"></i> Updated 3 minutes ago
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Saved
            <i class="fa fa-circle text-danger"></i> Missing
            <i class="fa fa-circle text-warning"></i> Wait to rescue
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <chart-card title="People Age"
                    :chart-data="preferencesChart.data"
                    chart-type="Pie">
          <span slot="footer">
            <i class="ti-timer"></i> Last 2 hours ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-danger"></i> &lt;10
            <i class="fa fa-circle text-info"></i> 20-60
            <i class="fa fa-circle text-warning"></i> >60
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <chart-card title="Resouces"
                    sub-title="Remaining resources"
                    :chart-data="activityChart.data"
                    :chart-options="activityChart.options">
          <span slot="footer">
            <i class="ti-check"></i> Last update 1 day ago
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Food
            <i class="fa fa-circle text-warning"></i> Medicine
          </div>
        </chart-card>
      </div>

    </div>

  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from 'chartist';
export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "warning",
          icon: "ti-home",
          title: "Shelter",
          value: "5 places",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "success",
          icon: "ti-wallet",
          title: "Revenue",
          value: "$1,345",
          footerText: "Last day",
          footerIcon: "ti-calendar"
        },
        {
          type: "danger",
          icon: "ti-pulse",
          title: "Emergency",
          value: "23",
          footerText: "In the last hour",
          footerIcon: "ti-timer"
        },
        {
          type: "info",
          icon: "ti-user",
          title: "People",
          value: "+1500",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ],
      usersChart: {
        data: {
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM",
            "8:00AM"
          ],
          series: [
            [50, 110, 240, 300, 800, 854, 1100, 1250, 1350],
            [20, 390, 400, 450, 290, 550, 578, 600, 650],
            [2, 10, 30, 50, 100, 120, 125, 130, 200]
          ]
        },
        options: {
          low: 0,
          high: 2000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false
        }
      },
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [
            [542, 543, 520, 680, 653, 753, 500, 550, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 400, 450, 698, 710, 736, 795]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "245px"
        }
      },
      preferencesChart: {
        data: {
          labels: ["62%", "32%", "6%"],
          series: [62, 32, 6]
        },
        options: {}
      }
    };
  }
};
</script>
<style>
</style>
