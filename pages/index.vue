<template>
  <header
    id="header"
    class="bg-black backdrop-blur-md md:px-6 px-2 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-black"
  >
    <div class="flex items-center space-x-8">
      <img src="/logo-with-name.png" alt="VIGELON Logo" class="w-60 h-15" />
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex space-x-8 items-center">
      <div class="relative group">
        <a
          href="#about"
          class="flex items-center text-white hover:text-electric-blue font-medium transition-colors"
        >
          Company
        </a>
      </div>

      <a
        href="#product-showcase"
        class="text-white hover:text-electric-blue font-medium transition-colors cursor-pointer"
        >Platform</a
      >
      <a
        href="#resources"
        class="text-white hover:text-electric-blue font-medium transition-colors cursor-pointer"
        >Resources</a
      >
      <a
        href="#contact"
        class="text-white hover:text-electric-blue font-medium transition-colors cursor-pointer"
        >Contact</a
      >
      <span
        class="md:w-auto w-16 md:text-base text-xs text-center bg-gray-50 bg-opacity-5 text-white md:px-6 px-1 md:py-2.5 py-1 rounded-lg font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
        >Sign In</span
      >
    </nav>

    <!-- Mobile Menu Button -->
    <div class="lg:hidden flex items-center space-x-4">
    
      <button
        @click="toggleMobileMenu"
        class="text-white hover:text-electric-blue transition-colors p-2"
        aria-label="Toggle mobile menu"
      >
        <div class="w-6 h-6 flex flex-col justify-center items-center">
          <span
            class="block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out"
            :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"
          ></span>
          <span
            class="block w-6 h-0.5 bg-current mt-1 transform transition duration-300 ease-in-out"
            :class="{ 'opacity-0': isMobileMenuOpen }"
          ></span>
          <span
            class="block w-6 h-0.5 bg-current mt-1 transform transition duration-300 ease-in-out"
            :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }"
          ></span>
        </div>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden absolute top-full left-0 right-0 bg-black backdrop-blur-md border-b border-gray-800 shadow-lg"
      @click="closeMobileMenu"
    >
      <nav class="px-6 py-4 space-y-4">
        <span
        class="bg-gray-50 bg-opacity-5 text-white px-3 py-1 rounded-lg font-semibold hover:bg-blue-600 transition-colors cursor-pointer text-xs"
        >Sign In</span
      >
        <a
          href="#about"
          class="block text-white hover:text-electric-blue font-medium transition-colors py-2"
          @click="closeMobileMenu"
        >
          Company
        </a>
        <a
          href="#product-showcase"
          class="block text-white hover:text-electric-blue font-medium transition-colors py-2"
          @click="closeMobileMenu"
        >
          Platform
        </a>
        <a
          href="#resources"
          class="block text-white hover:text-electric-blue font-medium transition-colors py-2"
          @click="closeMobileMenu"
        >
          Resources
        </a>
        <a
          href="#contact"
          class="block text-white hover:text-electric-blue font-medium transition-colors py-2"
          @click="closeMobileMenu"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>

  <section id="hero" class="relative min-h-[900px] overflow-hidden">
    <div class="absolute inset-0 z-0">
      <video
        src="/hero-video.mp4"
        autoplay
        loop
        muted
        playsinline
        webkit-playsinline
        preload="auto"
        class="w-full h-full object-cover"
      ></video>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <div class="relative z-10 pt-16 pl-4 md:pl-16 max-w-6xl">
      <h1
        class="text-3xl md:text-7xl font-inter font-bold text-white leading-tight mb-8"
      >
        Maximizing Airtime,<br />
        <span class="text-white">Minimizing Surprises.</span><br />
        <span class="text-xl md:text-5xl font-inter font-light text-white">
          Predictive Maintenance <br />for Drones &amp; eVTOLs
        </span>
      </h1>

      <div
        class="w-24 h-1 bg-gray-50 from-electric-blue to-cyan-bright mb-8"
      ></div>

      <p class="text-white text-xl md:text-2xl mb-12 max-w-3xl leading-relaxed">
        Cut downtime, extend battery life, and stay fleet ready — all in one
        platform.
        <span class="bg-black font-semibold"
          >Our AI predicts failures before they happen</span
        >, keeping your fleet airborne and profitable.
      </p>

      <div class="flex flex-row space-y-4 md:space-y-0 md:space-x-6 mb-16">
        <a
          href="https://calendly.com/ali-taleb1101/30min"
          target="_blank"
          class="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all hover-lift pulse-glow cursor-pointer"
        >
          <i class="fa-solid fa-play mr-3"></i>
          Request a Demo
        </a>
      </div>

      <div class="flex items-center space-x-12 text-white/80">
        <div class="text-center">
          <div class="text-base md:text-3xl font-bold text-white">30%</div>
          <div class="text-xs md:text-sm">Longer Battery Life</div>
        </div>
        <div class="text-center">
          <div class="text-base md:text-3xl font-bold text-white">40%</div>
          <div class="text-xs md:text-sm">Less Downtime</div>
        </div>
        <div class="text-center">
          <div class="text-base md:text-3xl font-bold text-white">5x</div>
          <div class="text-xs md:text-sm">ROI First Year</div>
        </div>
      </div>
    </div>
  </section>

  <section id="pain-points" class="py-24 bg-white-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-orbitron font-bold text-slate-dark mb-6"
        >
          The Hidden Costs of
          <span class="text-red-500">Reactive</span> Maintenance
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Fleet operators lose millions annually due to unplanned failures,
          compliance gaps, and inefficient maintenance workflows.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          class="bg-white p-8 rounded-xl shadow-lg hover-lift border-l-4 border-red-500"
        >
          <div
            class="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6"
          >
            <i
              class="fa-solid fa-exclamation-triangle text-red-500 text-2xl"
            ></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">
            Unplanned Downtime
          </h3>
          <p class="text-gray-600 mb-4">
            Unexpected failures ground your fleet, causing mission delays and
            revenue loss.
          </p>
          <div class="text-2xl font-bold text-red-500">$50K+</div>
          <div class="text-sm text-gray-500">per incident</div>
        </div>

        <div
          class="bg-white p-8 rounded-xl shadow-lg hover-lift border-l-4 border-orange-500"
        >
          <div
            class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-battery-empty text-orange-500 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">
            Battery Failures
          </h3>
          <p class="text-gray-600 mb-4">
            Sudden battery degradation creates safety risks and expensive
            replacement costs.
          </p>
          <div class="text-2xl font-bold text-orange-500">35%</div>
          <div class="text-sm text-gray-500">of total maintenance costs</div>
        </div>

        <div
          class="bg-white p-8 rounded-xl shadow-lg hover-lift border-l-4 border-yellow-500"
        >
          <div
            class="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-clipboard text-yellow-500 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">Manual Logging</h3>
          <p class="text-gray-600 mb-4">
            Technicians waste hours on paperwork instead of fixing aircraft.
          </p>
          <div class="text-2xl font-bold text-yellow-500">20hrs</div>
          <div class="text-sm text-gray-500">per week per technician</div>
        </div>

        <div
          class="bg-white p-8 rounded-xl shadow-lg hover-lift border-l-4 border-purple-500"
        >
          <div
            class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-gavel text-purple-500 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">
            Compliance Headaches
          </h3>
          <p class="text-gray-600 mb-4">
            Audit stress and regulatory violations from incomplete
            documentation.
          </p>
          <div class="text-2xl font-bold text-purple-500">$250K</div>
          <div class="text-sm text-gray-500">average fine</div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="solution"
    class="py-24 bg-black text-white relative overflow-hidden"
  >
    <div class="absolute inset-0 tech-grid opacity-20"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-6">
          The <span class="white-text">VIGELON</span> Advantage
        </h2>
        <p class="text-2xl text-gray-300 mb-4">
          We don't just manage maintenance —
          <span class="text-white font-semibold">we predict it.</span>
        </p>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Our AI-powered platform transforms reactive maintenance into
          predictive intelligence, keeping your fleet airborne and your
          operations profitable.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-12 mb-16">
        <div class="text-center group">
          <div
            class="w-24 h-24 bg-gray-50 from-electric-blue to-cyan-bright rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform"
          >
            <i class="fa-solid fa-crystal-ball text-black text-3xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 font-orbitron">
            Predictive Maintenance
          </h3>
          <p class="text-gray-300 text-lg mb-6">
            Our AI analyzes thousands of data points to forecast failures up to
            30 days in advance, giving you time to plan maintenance windows.
          </p>
          <ul class="text-left text-gray-400 space-y-2">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Real-time
              anomaly detection
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Failure
              probability scoring
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Component
              lifecycle tracking
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Replacement
              part lead time
            </li>
          </ul>
        </div>

        <div class="text-center group">
          <div
            class="w-24 h-24 bg-gray-50 from-electric-blue to-cyan-bright rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform"
          >
            <i class="fa-solid fa-cogs text-black text-3xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 font-orbitron">Adaptive AI</h3>
          <p class="text-gray-300 text-lg mb-6">
            Seamlessly coordinate work orders, parts inventory, and technician
            schedules. Everything syncs automatically when maintenance is
            needed.
          </p>
          <ul class="text-left text-gray-400 space-y-2">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Smart work
              order generation
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Parts
              procurement automation
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Technician
              scheduling optimization
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Mobile
              maintenance app
            </li>
          </ul>
        </div>

        <div class="text-center group">
          <div
            class="w-24 h-24 bg-gray-50 from-electric-blue to-cyan-bright rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform"
          >
            <i class="fa-solid fa-chart-line text-black text-3xl"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 font-orbitron">
            Flight Test Platform
          </h3>
          <p class="text-gray-300 text-lg mb-6">
            Real-time telemetry monitoring during test flights with instant
            flight readiness reports. Know your aircraft status before every
            mission.
          </p>
          <ul class="text-left text-gray-400 space-y-2">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Live telemetry
              streaming
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Automated
              flight readiness checks
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Performance
              benchmarking
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-gray-50 mr-3"></i>Regulatory
              compliance reporting
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="product-showcase" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-orbitron font-bold text-slate-dark mb-6"
        >
          See <span class="black">VIGELON</span> in Action
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Our platform provides complete visibility into your fleet operations
          with intuitive dashboards and actionable insights that keep your
          aircraft mission-ready.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        <div class="bg-gray-50 rounded-xl p-8">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-slate-dark mb-3">
              Flight Deck Dashboard
            </h3>
            <p class="text-gray-600">
              See uptime at a glance with real-time fleet status and predictive
              alerts.
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <img
              class="w-full h-64 object-cover rounded"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7c489a4a0a-a81c13a6626840736960.png"
              alt="modern aircraft maintenance dashboard interface with fleet status indicators, predictive maintenance alerts, battery health meters, flight readiness status"
            />
          </div>
          <div class="mt-4 flex items-center text-sm text-gray-500">
            <i class="fa-solid fa-eye mr-2 text-electric-blue"></i>
            Real-time fleet overview with predictive insights
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-8">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-slate-dark mb-3">
              Timeline Analytics
            </h3>
            <p class="text-gray-600">
              Track maintenance history and predict future service needs with
              AI-powered analytics.
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <img
              class="w-full h-64 object-cover rounded"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a6e0cdfa64-3be8f07bd5307fa50a51.png"
              alt="predictive maintenance timeline interface showing aircraft service history, future maintenance predictions, component lifecycle charts, analytics graphs"
            />
          </div>
          <div class="mt-4 flex items-center text-sm text-gray-500">
            <i class="fa-solid fa-clock mr-2 text-electric-blue"></i>
            Historical data with predictive maintenance scheduling
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-8">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-slate-dark mb-3">
              Work Orders Kanban
            </h3>
            <p class="text-gray-600">
              Assign work in seconds with automated task management and
              technician coordination.
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <img
              class="w-full h-64 object-cover rounded"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8d15b4a1c7-e28d4f65fad254ac5bfc.png"
              alt="kanban board interface for aircraft maintenance work orders, drag and drop task management, technician assignments, priority levels, status tracking"
            />
          </div>
          <div class="mt-4 flex items-center text-sm text-gray-500">
            <i class="fa-solid fa-tasks mr-2 text-electric-blue"></i>
            Streamlined work order management and tracking
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-8">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-slate-dark mb-3">
              ROI Analytics
            </h3>
            <p class="text-gray-600">
              Prove ROI to executives with detailed cost analysis and
              performance metrics.
            </p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <img
              class="w-full h-64 object-cover rounded"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5b3ba0e426-82383edc6be370c1e518.png"
              alt="ROI analytics dashboard with cost savings charts, maintenance efficiency metrics, downtime reduction graphs, financial performance indicators"
            />
          </div>
          <div class="mt-4 flex items-center text-sm text-gray-500">
            <i class="fa-solid fa-chart-bar mr-2 text-electric-blue"></i>
            Comprehensive ROI tracking and cost optimization
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="roi-value"
    class="py-24 bg-black from-electric-blue to-cyan-bright text-white"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-6">
          Measurable Results That Matter
        </h2>
        <p class="text-xl opacity-90 max-w-3xl mx-auto">
          Our customers see immediate impact on their bottom line with
          quantifiable improvements in fleet performance and operational
          efficiency.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div
          class="text-center bg-white/10 backdrop-blur-md rounded-xl p-8 hover-lift"
        >
          <div class="text-6xl font-orbitron font-bold mb-4">30%</div>
          <div class="text-xl font-semibold mb-2">Longer Battery Life</div>
          <p class="opacity-80">
            Predictive battery management extends operational cycles and reduces
            replacement costs.
          </p>
        </div>

        <div
          class="text-center bg-white/10 backdrop-blur-md rounded-xl p-8 hover-lift"
        >
          <div class="text-6xl font-orbitron font-bold mb-4">40%</div>
          <div class="text-xl font-semibold mb-2">Less Downtime</div>
          <p class="opacity-80">
            Proactive maintenance scheduling eliminates unexpected failures and
            mission delays.
          </p>
        </div>

        <div
          class="text-center bg-white/10 backdrop-blur-md rounded-xl p-8 hover-lift"
        >
          <div class="text-6xl font-orbitron font-bold mb-4">5x</div>
          <div class="text-xl font-semibold mb-2">ROI Within First Year</div>
          <p class="opacity-80">
            Cost savings from reduced downtime and optimized maintenance quickly
            pay for the platform.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="customers" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-orbitron font-bold text-slate-dark mb-6"
        >
          Trusted by Industry Leaders
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          From agriculture to urban air mobility, leading organizations trust
          VIGELON to keep their fleets operational and compliant.
        </p>
      </div>

      <div class="grid md:grid-cols-5 gap-8 mb-16">
        <div
          class="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div
            class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-seedling text-green-600 text-2xl"></i>
          </div>
          <h3 class="font-semibold text-slate-dark">Agriculture</h3>
          <p class="text-sm text-gray-600 mt-2">
            Crop monitoring &amp; spraying drones
          </p>
        </div>

        <div
          class="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div
            class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-truck text-blue-600 text-2xl"></i>
          </div>
          <h3 class="font-semibold text-slate-dark">Delivery</h3>
          <p class="text-sm text-gray-600 mt-2">
            Last-mile logistics &amp; cargo transport
          </p>
        </div>

        <div
          class="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div
            class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-search text-purple-600 text-2xl"></i>
          </div>
          <h3 class="font-semibold text-slate-dark">Inspection</h3>
          <p class="text-sm text-gray-600 mt-2">
            Infrastructure &amp; asset monitoring
          </p>
        </div>

        <div
          class="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div
            class="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-shield-alt text-red-600 text-2xl"></i>
          </div>
          <h3 class="font-semibold text-slate-dark">Public Safety</h3>
          <p class="text-sm text-gray-600 mt-2">
            Emergency response &amp; surveillance
          </p>
        </div>

        <div
          class="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div
            class="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-building text-indigo-600 text-2xl"></i>
          </div>
          <h3 class="font-semibold text-slate-dark">Urban Air Mobility</h3>
          <p class="text-sm text-gray-600 mt-2">
            Passenger &amp; cargo eVTOL operations
          </p>
        </div>
      </div>

      <div class="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <div class="flex justify-center items-center mb-4">
            <div class="flex text-yellow-400">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <blockquote class="text-2xl text-slate-dark font-medium mb-6">
            "Vigelon is currently implementing AI for our maintenance operations
            and it's transformed how we manage our fleet maintenance, the
            dashboards are straight to the point, with clear visibility on
            maintenance prediction"
          </blockquote>
          <div class="flex items-center justify-center space-x-4">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
              alt="Customer"
              class="w-12 h-12 rounded-full"
            />
            <div class="text-left">
              <div class="font-semibold text-slate-dark">Marcus Harris</div>
              <div class="text-gray-600">Operations Director</div>
              <div class="text-sm text-gray-500">SMG Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="contact"
    class="py-24 bg-black text-white relative overflow-hidden"
  >
    <div class="absolute inset-0 tech-grid opacity-10"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-6">
          Ready to Transform Your Fleet Operations?
        </h2>
        <p class="text-xl text-gray-300 mb-12">
          Join the early access program and be among the first to experience the
          future of predictive fleet intelligence.
        </p>

        <div class="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8">
          <form
            @submit.prevent="handleEarlyAccessSubmit"
            class="grid md:grid-cols-4 gap-4"
          >
            <input
              v-model="earlyAccessForm.name"
              type="text"
              placeholder="Full Name"
              required
              class="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-electric-blue"
            />
            <input
              v-model="earlyAccessForm.email"
              type="email"
              placeholder="Email Address"
              required
              class="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-electric-blue"
            />
            <select
              v-model="earlyAccessForm.fleetSize"
              class="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-electric-blue"
            >
              <option value="">Fleet Size</option>
              <option value="1-10">1-10 aircraft</option>
              <option value="11-50">11-50 aircraft</option>
              <option value="51-200">51-200 aircraft</option>
              <option value="200+">200+ aircraft</option>
            </select>
            <button
              type="submit"
              :disabled="isEarlyAccessSubmitting"
              class="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isEarlyAccessSubmitting ? "Sending..." : "Get Early Access" }}
            </button>
          </form>

          <!-- Success/Error Message -->
          <div
            v-if="earlyAccessStatus.message"
            class="mt-4 p-4 rounded-lg"
            :class="
              earlyAccessStatus.success
                ? 'bg-green-500/20 border border-green-500/30'
                : 'bg-red-500/20 border border-red-500/30'
            "
          >
            <p class="text-white text-center">
              {{ earlyAccessStatus.message }}
            </p>
          </div>
        </div>

        <div
          class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <span
            class="inline-flex items-center text-white hover:text-electric-blue transition-colors cursor-pointer"
          >
            <i class="fa-solid fa-phone mr-3"></i>
            Speak with Support: +1 (438) 435-3196
          </span>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <h2
            class="text-4xl md:text-5xl font-orbitron font-bold text-slate-dark mb-6"
          >
            Building the Predictive Backbone for Electric Aviation
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            At VIGELON, we believe the future of aviation is electric,
            autonomous, and intelligent. Our mission is to provide the
            predictive infrastructure that makes this future possible.
          </p>
          <div class="space-y-6">
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
              >
                <i class="fa-solid fa-rocket bg-gray-50 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-dark mb-2">
                  Aerospace Heritage
                </h3>
                <p class="text-gray-600">
                  Founded by former Boeing and NASA engineers with decades of
                  aviation experience.
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
              >
                <i class="fa-solid fa-brain bg-gray-50 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-dark mb-2">
                  AI Innovation
                </h3>
                <p class="text-gray-600">
                  Cutting-edge machine learning algorithms trained on millions
                  of flight hours.
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <div
                class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
              >
                <i class="fa-solid fa-shield-alt bg-gray-50 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-dark mb-2">
                  Regulatory Alignment
                </h3>
                <p class="text-gray-600">
                  Built to meet FAA, EASA, and ISO 9001 compliance requirements
                  from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            class="w-full h-96 object-cover rounded-xl shadow-lg"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b2788184ec-77a9007f0689177c5034.png"
            alt="aerospace engineers working on electric aircraft maintenance systems, high-tech aviation facility, modern aircraft hangar with eVTOL vehicles"
          />
        </div>
      </div>

      <div class="bg-gray-50 rounded-xl p-8">
        <h3 class="text-3xl font-bold text-slate-dark mb-8 text-center">
          The Team
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <img
              src="/taleb.png"
              alt="CEO"
              class="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 class="text-xl font-bold text-slate-dark">Ali Taleb</h4>
            <p class="text-black font-medium mb-2">CEO &amp; Co-Founder</p>
            <p class="text-gray-600 text-sm">
              Former Archer Avionics Engineer with patents in flight deck
              systems and product ownership of the Auxiliary Control Panels;
              later drove $500K+ in eVTOL engineering services sales at Fawtal
            </p>
          </div>
          <div class="text-center">
            <img
              src="/fawaz.png"
              alt="CTO"
              class="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 class="text-xl font-bold text-slate-dark">Ali Fawaz</h4>
            <p class="text-black font-medium mb-2">CTO &amp; Co-Founder</p>
            <p class="text-gray-600 text-sm">
              Former Software Specialist at Accenture, expert in predictive
              maintenance software implementation. Built applications for
              startups and leads software consulting projects
            </p>
          </div>

          <div class="text-center">
            <img
              src="/solowka.png"
              alt="CEO"
              class="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 class="text-xl font-bold text-slate-dark">Eric Solowka</h4>
            <p class="text-black font-medium mb-2">Advisor</p>
            <p class="text-gray-600 text-sm">
              40+ years leadership experience; Co-Founder Atlantis Aerospace,
              Director at Thales, Founding Partner iXY Leadership
            </p>
          </div>

          <div class="text-center">
            <img
              src="/azamskyi.png"
              alt="CEO"
              class="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 class="text-xl font-bold text-slate-dark">Jacob Azamskyi</h4>
            <p class="text-black font-medium mb-2">Software Developer</p>
            <p class="text-gray-600 text-sm">
              Former Software Developer at SmartClick Solutions
            </p>
          </div>

          <div class="text-center">
            <img
              src="/norwood.png"
              alt="CEO"
              class="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 class="text-xl font-bold text-slate-dark">Raffaello Norwood</h4>
            <p class="text-black font-medium mb-2">Software Developer</p>
            <p class="text-gray-600 text-sm">
              Junior Software Developer at Fawtal Consulting
            </p>
          </div>

          <div class="text-center">
            <img
              src="/hamren.png"
              alt="CEO"
              class="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 class="text-xl font-bold text-slate-dark">John Hamren</h4>
            <p class="text-black font-medium mb-2">Customer Success Manager</p>
            <p class="text-gray-600 text-sm">
              Former Sales Manager & Go-To-Market Strategy Specialist at FitX
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    id="technology"
    class="py-24 bg-gradient-to-br from-black to-navy text-white"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-6">
          Advanced Technology Stack
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Built on enterprise-grade infrastructure with military-level security
          and aerospace-certified reliability.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-lift"
        >
          <div
            class="w-16 h-16 bg-black from-electric-blue to-cyan-bright rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-cloud text-white text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-2">Cloud-Native</h3>
          <p class="text-gray-300 text-sm">
            AWS-powered infrastructure with 99.99% uptime guarantee
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-lift"
        >
          <div
            class="w-16 h-16 bg-black from-electric-blue to-cyan-bright rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-lock text-white text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-2">Record Control</h3>
          <p class="text-gray-300 text-sm">
            Transport Canada & FAA Maintenance Documentation Compliance
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-lift"
        >
          <div
            class="w-16 h-16 bg-black from-electric-blue to-cyan-bright rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-mobile-alt text-white text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-2">Mobile-First</h3>
          <p class="text-gray-300 text-sm">
            Native iOS and Android apps for field technicians
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-lift"
        >
          <div
            class="w-16 h-16 bg-black from-electric-blue to-cyan-bright rounded-lg flex items-center justify-center mx-auto mb-4"
          >
            <i class="fa-solid fa-plug text-white text-2xl"></i>
          </div>
          <h3 class="text-lg font-bold mb-2">API-First</h3>
          <p class="text-gray-300 text-sm">
            Seamless integration with existing systems
          </p>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <div class="bg-white/5 rounded-xl p-8">
          <h3 class="text-2xl font-bold mb-6">Machine Learning</h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>Predictive
              failure algorithms
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>Anomaly detection
              models
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>Performance
              optimization AI
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>Natural language
              processing
            </li>
          </ul>
        </div>

        <div class="bg-white/5 rounded-xl p-8">
          <h3 class="text-2xl font-bold mb-6">Data Integration</h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>Real-time
              telemetry streaming
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>IoT sensor
              networks
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>Weather data
              integration
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>Third-party
              system APIs
            </li>
          </ul>
        </div>

        <div class="bg-white/5 rounded-xl p-8">
          <h3 class="text-2xl font-bold mb-6">Compliance</h3>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>FAA Part 145
              Integration
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>EASA compliance
              support
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>ISO 9001
              documentation
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-check text-black mr-3"></i>Audit trail
              management
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="resources" class="py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-orbitron font-bold text-slate-dark mb-6"
        >
          Resources &amp; Support
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to get started and maximize your success with
          VIGELON.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl p-8 shadow-lg hover-lift">
          <div
            class="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-book bg-gray-50 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">Documentation</h3>
          <p class="text-gray-600 mb-6">
            Comprehensive guides, API documentation, and best practices for
            fleet management.
          </p>
          <span
            class="bg-gray-50 font-semibold hover:text-blue-600 cursor-pointer"
            >Read Docs →</span
          >
        </div>

        <div class="bg-white rounded-xl p-8 shadow-lg hover-lift">
          <div
            class="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-video bg-gray-50 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">
            Video Tutorials
          </h3>
          <p class="text-gray-600 mb-6">
            Step-by-step video guides to help you get the most out of the
            platform.
          </p>
          <span
            class="bg-gray-50 font-semibold hover:text-blue-600 cursor-pointer"
            >Watch Videos →</span
          >
        </div>

        <div class="bg-white rounded-xl p-8 shadow-lg hover-lift">
          <div
            class="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-users bg-gray-50 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">
            Community Forum
          </h3>
          <p class="text-gray-600 mb-6">
            Connect with other fleet operators and share best practices and
            insights.
          </p>
          <span
            class="bg-gray-50 font-semibold hover:text-blue-600 cursor-pointer"
            >Join Community →</span
          >
        </div>

        <div class="bg-white rounded-xl p-8 shadow-lg hover-lift">
          <div
            class="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-graduation-cap bg-gray-50 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">
            Training Program
          </h3>
          <p class="text-gray-600 mb-6">
            Comprehensive training for your team to maximize platform adoption
            and ROI.
          </p>
          <span
            class="bg-gray-50 font-semibold hover:text-blue-600 cursor-pointer"
            >Learn More →</span
          >
        </div>

        <div class="bg-white rounded-xl p-8 shadow-lg hover-lift">
          <div
            class="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-headset bg-gray-50 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">24/7 Support</h3>
          <p class="text-gray-600 mb-6">
            Round-the-clock technical support to keep your operations running
            smoothly.
          </p>
          <span
            class="bg-gray-50 font-semibold hover:text-blue-600 cursor-pointer"
            >Contact Support →</span
          >
        </div>

        <div class="bg-white rounded-xl p-8 shadow-lg hover-lift">
          <div
            class="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6"
          >
            <i class="fa-solid fa-chart-line bg-gray-50 text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-dark mb-4">ROI Calculator</h3>
          <p class="text-gray-600 mb-6">
            Calculate your potential savings and return on investment with
            VIGELON.
          </p>
          <span
            class="bg-gray-50 font-semibold hover:text-blue-600 cursor-pointer"
            >Calculate ROI →</span
          >
        </div>
      </div>
    </div>
  </section>

  <footer id="footer" class="bg-black text-white py-16">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        <div class="lg:col-span-2">
          <div class="flex items-center mb-6">
            <img
              src="/logo-with-name.png"
              alt="VIGELON Logo"
              class="w-60 h-15"
            />
          </div>
          <p class="text-gray-300 mb-6 max-w-md">
            Building the predictive backbone for electric aviation. Know before
            you fly with AI-powered fleet intelligence that keeps your aircraft
            mission-ready.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/108417366"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-electric-blue transition-colors cursor-pointer"
            >
              <i class="fa-brands fa-linkedin text-lg"></i>
            </a>
            <a
              href="https://x.com/VIGEL_ON"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-electric-blue transition-colors cursor-pointer"
            >
              <i class="fa-brands fa-twitter text-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/@VIGELON"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-electric-blue transition-colors cursor-pointer"
            >
              <i class="fa-brands fa-youtube text-lg"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Company</h3>
          <ul class="space-y-3 text-gray-300">
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >About Us</span
              >
            </li>
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Careers</span
              >
            </li>
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Press</span
              >
            </li>
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Investors</span
              >
            </li>
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Partners</span
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Platform</h3>
          <ul class="space-y-3 text-gray-300">
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Predictive Maintenance</span
              >
            </li>
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Flight Test Platform</span
              >
            </li>
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Work Order Management</span
              >
            </li>
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Analytics &amp; Reporting</span
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-4">Support</h3>
          <ul class="space-y-3 text-gray-300">
            <li>
              <span
                class="hover:text-electric-blue transition-colors cursor-pointer"
                >Contact Support</span
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <div class="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 VIGELON, Inc. All rights reserved.
        </div>
        <div class="flex space-x-6 text-sm text-gray-400">
          <span
            class="hover:text-electric-blue transition-colors cursor-pointer"
            >Privacy Policy</span
          >
          <span
            class="hover:text-electric-blue transition-colors cursor-pointer"
            >Terms of Service</span
          >
          <span
            class="hover:text-electric-blue transition-colors cursor-pointer"
            >Security</span
          >
          <span
            class="hover:text-electric-blue transition-colors cursor-pointer"
            >Compliance</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);
const isMobileMenuOpen = ref(false);

const form = ref({
  name: "",
  email: "",
  company: "",
  message: "",
});

const earlyAccessForm = ref({
  name: "",
  email: "",
  fleetSize: "",
});

const isSubmitting = ref(false);
const submitStatus = ref({
  success: false,
  message: "",
});

const isEarlyAccessSubmitting = ref(false);
const earlyAccessStatus = ref({
  success: false,
  message: "",
});

const videoPlayer = ref(null);
const videoPlaceholder = ref(null);
const isVideoPlaying = ref(false);

const playVideo = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play();
      isVideoPlaying.value = true;
    } else {
      videoPlayer.value.pause();
      isVideoPlaying.value = false;
    }
  }
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark");
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    submitStatus.value = { success: false, message: "" };

    // Validate form
    if (!form.value.name || !form.value.email || !form.value.message) {
      throw new Error("Please fill in all required fields");
    }

    // Send form data to API
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: form.value,
    });

    if (response.status === 200) {
      submitStatus.value = {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      };
      // Reset form
      form.value = {
        name: "",
        email: "",
        company: "",
        message: "",
      };
    } else {
      throw new Error(response.message || "Failed to send message");
    }
  } catch (error) {
    submitStatus.value = {
      success: false,
      message: error.message || "Something went wrong. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};

const handleEarlyAccessSubmit = async () => {
  try {
    isEarlyAccessSubmitting.value = true;
    earlyAccessStatus.value = { success: false, message: "" };

    // Validate form
    if (!earlyAccessForm.value.name || !earlyAccessForm.value.email) {
      throw new Error("Please fill in all required fields");
    }

    // Prepare data for API
    const formData = {
      name: earlyAccessForm.value.name,
      email: earlyAccessForm.value.email,
      company: earlyAccessForm.value.fleetSize
        ? `Fleet Size: ${earlyAccessForm.value.fleetSize}`
        : "",
      message:
        "Early Access Request - I'm interested in joining the early access program for VIGELON's predictive maintenance platform.",
    };

    // Send form data to API
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      earlyAccessStatus.value = {
        success: true,
        message:
          "Thank you for your interest! We'll be in touch soon with early access details.",
      };
      // Reset form
      earlyAccessForm.value = {
        name: "",
        email: "",
        fleetSize: "",
      };
    } else {
      throw new Error(response.message || "Failed to send request");
    }
  } catch (error) {
    earlyAccessStatus.value = {
      success: false,
      message: error.message || "Something went wrong. Please try again.",
    };
  } finally {
    isEarlyAccessSubmitting.value = false;
  }
};

// Video player functionality
onMounted(() => {
  // Sticky Header
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    // Close mobile menu on scroll
    if (isMobileMenuOpen.value) {
      closeMobileMenu();
    }
    
    if (window.scrollY > 100) {
      header.classList.add("py-2");
      header.classList.add("shadow-md");
    } else {
      header.classList.remove("py-2");
      header.classList.remove("shadow-md");
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    const header = document.getElementById("header");
    if (isMobileMenuOpen.value && !header.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Close mobile menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
// Mobile Menu Toggle
</script>

<style scoped>
/* Hero Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Section Animations */
.hero-title {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-subtitle {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-buttons {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-stats {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.hero-visual {
  animation: fadeInRight 0.8s ease-out 0.3s both;
}

.hero-main-card {
  animation: fadeIn 1s ease-out 0.5s both;
}

.hero-floating-card-1 {
  animation: floatUp 0.8s ease-out 0.9s both;
}

.hero-floating-card-2 {
  animation: floatUp 0.8s ease-out 1.1s both;
}

/* Add subtle hover effects */
.hero-buttons a,
.hero-buttons button {
  transition: all 0.3s ease;
}

.hero-buttons a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-floating-card-1,
.hero-floating-card-2 {
  transition: transform 0.3s ease;
}

.hero-floating-card-1:hover,
.hero-floating-card-2:hover {
  transform: translateY(-3px);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .hero-visual {
    animation: fadeInUp 0.8s ease-out 0.7s both;
  }
}
::-webkit-scrollbar {
  display: none;
}
.font-orbitron {
  font-family: "Orbitron", monospace;
}
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
}
.text-red {
  color: #00eeffff;
}

.hover-lift {
  transition: transform 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-8px);
}
.pulse-glow {
  animation: pulse-glow 2s infinite;
}
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(11, 12, 14, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
  }
}
.tech-grid {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(59, 130, 246, 0.1) 0%,
    transparent 50%
  );
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
