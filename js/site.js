(() => {
  const params = new URLSearchParams(window.location.search);
  const normalize = (value) => value.trim().toLocaleLowerCase();

  const jobList = document.querySelector('.job-listings');
  if (jobList) {
    const additionalJobs = [
      ["Product Designer", "Northstar Studio", "N", "logo-sunrise", "Remote · US", "1", 125, 155, "Create intuitive product experiences from early concepts through polished launch."],
      ["UX Researcher", "Brightside Health", "B", "logo-field", "Boston, MA · Hybrid", "1", 105, 135, "Turn customer conversations and research into clear product direction."],
      ["Senior UX Designer", "Latticework", "L", "logo-violet", "New York, NY · Hybrid", "2", 140, 175, "Lead thoughtful design work across a growing suite of collaboration tools."],
      ["Visual Designer", "Goodkind", "G", "logo-kin", "Remote · US", "2", 90, 120, "Build a distinctive visual system across digital campaigns and product launches."],
      ["Design Systems Lead", "Atlas Cloud", "A", "logo-orbit", "Seattle, WA · Hybrid", "3", 150, 185, "Help product teams ship consistent, accessible interfaces at scale."],
      ["Frontend Developer", "Morrow", "M", "logo-mono", "Remote · US", "3", 130, 165, "Build fast, accessible web experiences with a product-minded engineering team."],
      ["Software Engineer, Platform", "Juniper Works", "J", "logo-field", "Denver, CO · Hybrid", "4", 145, 185, "Improve the platform foundations that power a growing set of customer products."],
      ["Backend Engineer", "Signal House", "S", "logo-sunrise", "Chicago, IL · Hybrid", "4", 135, 170, "Design dependable APIs and services for data-rich customer workflows."],
      ["Mobile Engineer", "Daylight", "D", "logo-kin", "Remote · US", "5", 125, 160, "Deliver polished iOS and Android features for a large and active community."],
      ["QA Automation Engineer", "Orbit Labs", "O", "logo-orbit", "Austin, TX · Hybrid", "5", 105, 140, "Build automated quality checks that make every release more reliable."],
      ["Growth Marketing Manager", "Fieldnote", "F", "logo-field", "Remote · US", "6", 115, 145, "Plan measurable growth programs across content, lifecycle, and partnerships."],
      ["Content Strategist", "Commonroom", "C", "logo-violet", "Portland, OR · Hybrid", "6", 95, 125, "Make complex product ideas clear through useful, audience-first content."],
      ["Lifecycle Marketing Lead", "Sunroom", "S", "logo-sunrise", "New York, NY · Hybrid", "7", 120, 155, "Create helpful customer journeys that support people at every stage."],
      ["SEO Manager", "Northstar Studio", "N", "logo-mono", "Remote · US", "7", 100, 130, "Grow high-quality organic discovery with a practical, data-led strategy."],
      ["Product Manager", "Monograph", "M", "logo-mono", "Chicago, IL · Hybrid", "8", 135, 170, "Set product direction and help a cross-functional team deliver meaningful value."],
      ["Technical Program Manager", "Atlas Cloud", "A", "logo-orbit", "San Francisco, CA · Hybrid", "8", 145, 180, "Coordinate complex technical programs and keep teams focused on outcomes."],
      ["Business Operations Manager", "Brightside Health", "B", "logo-kin", "Remote · US", "9", 110, 145, "Improve the operating systems that help a mission-driven team scale."],
      ["Customer Success Manager", "Latticework", "L", "logo-violet", "Boston, MA · Hybrid", "9", 90, 120, "Help customers reach their goals through thoughtful onboarding and support."],
      ["Account Executive", "Signal House", "S", "logo-sunrise", "New York, NY · Hybrid", "10", 100, 160, "Build trusted customer relationships and guide teams to the right solution."],
      ["People Operations Partner", "Goodkind", "G", "logo-field", "Remote · US", "10", 95, 125, "Make the employee experience clear, supportive, and easy to navigate."],
      ["Data Scientist", "Orbit Labs", "O", "logo-orbit", "Remote · US", "11", 145, 185, "Use experimentation and modeling to answer high-impact product questions."],
      ["Business Intelligence Analyst", "Daylight", "D", "logo-kin", "Austin, TX · Hybrid", "11", 100, 135, "Build clear reporting that helps teams make confident decisions."],
      ["Security Engineer", "Juniper Works", "J", "logo-field", "Seattle, WA · Hybrid", "12", 150, 190, "Strengthen cloud security practices across products and internal systems."],
      ["IT Support Specialist", "Morrow", "M", "logo-mono", "Denver, CO · On-site", "12", 70, 95, "Give teammates responsive technical support and keep workplace systems healthy."],
      ["Financial Analyst", "Monograph", "M", "logo-mono", "Chicago, IL · Hybrid", "13", 90, 120, "Translate financial performance into clear plans and useful forecasts."],
      ["Senior Accountant", "Fieldnote", "F", "logo-field", "Remote · US", "13", 105, 135, "Own core accounting processes and help maintain accurate reporting."],
      ["Creative Director", "Goodkind", "G", "logo-kin", "Los Angeles, CA · Hybrid", "14", 150, 190, "Set a clear creative vision and guide work from concept to delivery."],
      ["Copywriter", "Fieldwork", "F", "logo-field", "Remote · US", "14", 85, 115, "Write approachable, memorable copy for campaigns and customer experiences."],
      ["Operations Coordinator", "Northstar Studio", "N", "logo-sunrise", "Portland, OR · On-site", "15", 65, 85, "Keep everyday operations organized and help the team do its best work."],
      ["Research Associate", "Brightside Health", "B", "logo-violet", "Boston, MA · Hybrid", "15", 75, 100, "Support research projects with careful analysis and clear documentation."]
    ];

    additionalJobs.forEach(([title, company, logo, logoClass, workplace, days, minSalary, maxSalary, summary]) => {
      const card = document.createElement('article');
      card.className = 'job-card listing-card';
      const companyLocation = workplace === 'Remote · US'
        ? 'United States'
        : workplace.replace(/ · (Hybrid|On-site)$/, '');
      card.innerHTML = `
        <div class="job-card-top">
          <span class="company-logo ${logoClass}" aria-hidden="true">${logo}</span>
          <button class="save-button" type="button" aria-label="Save ${title} job">♡</button>
        </div>
        <div class="job-meta"><span>FULL TIME</span><span>·</span><span>${workplace.toUpperCase()}</span><span>·</span><span>${days} DAYS AGO</span></div>
        <h3><a href="job-details.html">${title}</a></h3>
        <p class="company-name">${company} <span>·</span> ${companyLocation}</p>
        <p class="job-summary">${summary}</p>
        <div class="job-card-bottom">
          <span class="salary">$${minSalary}k – $${maxSalary}k <small>/ year</small></span>
          <a class="btn btn-outline-ink" href="job-details.html">View details <span aria-hidden="true">↗</span></a>
        </div>`;
      jobList.append(card);
    });

    const cards = [...jobList.querySelectorAll('.listing-card')];
    const searchForm = document.querySelector('.search-panel');
    const queryInput = searchForm?.querySelector('[name="q"]');
    const locationInput = searchForm?.querySelector('[name="location"]');
    const query = normalize(params.get('q') || '');
    const location = normalize(params.get('location') || '');
    if (queryInput) queryInput.value = params.get('q') || '';
    if (locationInput) locationInput.value = params.get('location') || '';

    const filterInputs = [...document.querySelectorAll('.filter-group input[type="checkbox"]')];
    const salarySelect = document.querySelector('.salary-filter select');
    const sortSelect = document.querySelector('.sort-control select');
    const countLabel = document.querySelector('.result-count');
    filterInputs.forEach((input) => {
      const heading = input.closest('.filter-group')?.querySelector('b')?.textContent.toLowerCase() || '';
      input.dataset.group = heading.includes('workplace') ? 'workplace' : heading.includes('experience') ? 'level' : 'type';
      input.value = normalize(input.parentElement.textContent).replace(/\d+/g, '').trim().replace(/\s+/g, '-');
    });
    cards.forEach((card) => {
      const text = normalize(card.textContent);
      card.dataset.type = 'full-time';
      card.dataset.workplace = text.includes('remote') ? 'remote' : text.includes('hybrid') ? 'hybrid' : 'on-site';
      card.dataset.level = /senior|lead|manager/.test(text) ? 'senior-level' : /intern|junior|entry/.test(text) ? 'entry-level' : 'mid-level';
      card.dataset.salary = (text.match(/\$(\d+)k\s*[–-]/)?.[1] || '0') + '000';
      card.dataset.location = card.querySelector('.company-name')?.textContent || '';
      card.dataset.age = card.querySelector('.job-meta')?.textContent.match(/(\d+)\s+days?/i)?.[1] || '0';
    });
    const emptyState = document.createElement('p');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No jobs match those filters. Try another search.';
    emptyState.hidden = true;
    jobList.append(emptyState);

    const getChecked = (group) => filterInputs
      .filter((input) => input.dataset.group === group && input.checked)
      .map((input) => input.value);

    function updateJobs() {
      const types = getChecked('type');
      const workplaces = getChecked('workplace');
      const levels = getChecked('level');
      const salaryChoice = salarySelect?.selectedOptions[0]?.textContent || '';
      const minSalary = Number(salaryChoice.replace(/[^0-9]/g, '')) || 0;
      const sortText = normalize(sortSelect?.selectedOptions[0]?.textContent || '');
      const sort = sortText.includes('newest') ? 'newest' : sortText.includes('salary') ? 'salary' : 'relevant';

      const ordered = [...cards];
      if (sort === 'salary') ordered.sort((a, b) => Number(b.dataset.salary) - Number(a.dataset.salary));
      if (sort === 'newest') ordered.sort((a, b) => Number(a.dataset.age) - Number(b.dataset.age));
      ordered.forEach((card) => jobList.insertBefore(card, emptyState));

      let visible = 0;
      cards.forEach((card) => {
        const text = normalize(card.textContent);
        const matches = (!query || text.includes(query))
          && (!location || normalize(card.dataset.location).includes(location))
          && (!types.length || types.includes(card.dataset.type))
          && (!workplaces.length || workplaces.includes(card.dataset.workplace))
          && (!levels.length || levels.includes(card.dataset.level))
          && Number(card.dataset.salary || 0) >= minSalary;
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      emptyState.hidden = visible !== 0;
      if (countLabel) countLabel.textContent = String(visible).padStart(2, '0');
      const shown = document.querySelector('.pagination-row > span');
      if (shown) shown.textContent = `Showing ${visible} of ${cards.length} sample roles`;
    }

    filterInputs.forEach((input) => input.addEventListener('change', updateJobs));
    salarySelect?.addEventListener('change', updateJobs);
    sortSelect?.addEventListener('change', updateJobs);
    document.querySelector('.filter-clear')?.addEventListener('click', () => {
      filterInputs.forEach((input) => { input.checked = false; });
      if (salarySelect) salarySelect.selectedIndex = 0;
      if (queryInput) queryInput.value = '';
      if (locationInput) locationInput.value = '';
      window.history.replaceState({}, '', window.location.pathname);
      updateJobs();
    });
    updateJobs();
  }

  const companyGrid = document.querySelector('.companies-page .row.g-4');
  if (companyGrid) {
    const profiles = [...companyGrid.querySelectorAll('.company-profile')];
    const form = document.querySelector('.search-panel');
    const input = form?.querySelector('[name="q"]');
    const sort = document.querySelector('.companies-page .sort-control select');
    const query = params.get('q') || '';
    if (input) input.value = query;
    const emptyState = document.createElement('p');
    emptyState.className = 'empty-state col-12';
    emptyState.textContent = 'No companies match your search.';
    emptyState.hidden = true;
    companyGrid.append(emptyState);
    function updateCompanies() {
      const term = normalize(input?.value || '');
      const ordered = [...profiles];
      if (normalize(sort?.selectedOptions[0]?.textContent || '').includes('open roles')) {
        ordered.sort((a, b) => Number(b.querySelector('.hiring-pill')?.textContent.match(/\d+/)?.[0] || 0)
          - Number(a.querySelector('.hiring-pill')?.textContent.match(/\d+/)?.[0] || 0));
      }
      ordered.forEach((profile) => companyGrid.insertBefore(profile.closest('[class*="col-"]'), emptyState));
      let visible = 0;
      profiles.forEach((profile) => {
        const matches = normalize(profile.textContent).includes(term);
        profile.closest('[class*="col-"]').hidden = !matches;
        if (matches) visible += 1;
      });
      emptyState.hidden = visible !== 0;
      const count = document.querySelector('.companies-page .result-count');
      if (count) count.textContent = String(visible).padStart(2, '0');
    }
    input?.addEventListener('input', updateCompanies);
    sort?.addEventListener('change', updateCompanies);
    updateCompanies();
  }

  document.querySelectorAll('.save-button').forEach((button) => {
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      const saved = button.getAttribute('aria-pressed') === 'true';
      button.setAttribute('aria-pressed', String(!saved));
      button.textContent = saved ? '♡' : '♥';
      button.setAttribute('aria-label', `${saved ? 'Save' : 'Remove saved'} ${button.getAttribute('aria-label').replace(/^(Save|Remove saved) /, '')}`);
    });
  });

  document.querySelectorAll('form[action^="#"]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.querySelector(form.getAttribute('action'));
      if (message) {
        message.style.display = 'block';
        message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    });
  });
})();
