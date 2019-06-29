<template>
	<div class="wrapper">
		<side-bar>
			<template slot="links">
				<sidebar-link to="/shelters" name="Shelters" :icon="'ti-home'"/>

				<sidebar-link to="/dashboard" name="Analytics" icon="ti-panel"/>
				<sidebar-link to="/stats" name="Log out" icon="ti-shift-right" />
				<sidebar-link to="/icons" name="Log out" icon="ti-user"/>
			</template>

			<mobile-menu>
				<li class="nav-item">
				<a class="nav-link">
					<i class="ti-panel"></i>
					<p>Stats</p>
				</a>
				</li>
				<drop-down class="nav-item"
						title="5 Notifications"
						title-classes="nav-link"
						icon="ti-bell">
				<a class="dropdown-item">Notification 1</a>
				<a class="dropdown-item">Notification 2</a>
				<a class="dropdown-item">Notification 3</a>
				<a class="dropdown-item">Notification 4</a>
				<a class="dropdown-item">Another notification</a>
				</drop-down>
				<li class="nav-item">
				<a class="nav-link">
					<i class="ti-settings"></i>
					<p>Settings</p>
				</a>
				</li>
				<li class="divider"></li>
			</mobile-menu>
		</side-bar>
		<div class="main-panel">
		<top-navbar></top-navbar>

		<dashboard-content @click.native="toggleSidebar">

		</dashboard-content>
		</div>
	</div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
