// 1. Complete Data for All 10 Required Rock & Metal Concerts
        const CONCERTS = [
            {
                id: 'bon-jovi',
                index: '#01',
                band: 'Bon Jovi',
                subgenre: 'Hard Rock / Arena Rock',
                category: 'hard-rock',
                tourTitle: 'Forever World Tour — Jakarta Night',
                dateISO: '2026-11-14',
                dateDisplay: 'Sabtu, 14 Nov 2026',
                timeDisplay: '19:30 WIB',
                city: 'Jakarta',
                venue: 'Stadion Utama Gelora Bung Karno (GBK), Jakarta',
                status: 'Tersedia',
                quotaLeft: '68% Tersedia',
                startingPrice: 1650000,
                setlist: "Livin' on a Prayer, It's My Life, You Give Love a Bad Name, Always",
                posterCode: 'BJ-84',
                image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Moshpit', desc: 'Standing area dekat bibir panggung utama', price: 1650000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Kursi bernomor tribun bawah pandangan lurus', price: 2450000 },
                    { id: 'vip', name: 'VIP Box', desc: 'Akses lounge ber-AC, lanyard eksklusif & fast track', price: 4200000 }
                ]
            },
            {
                id: 'metallica',
                index: '#02',
                band: 'Metallica',
                subgenre: 'Heavy Metal / Thrash',
                category: 'heavy-metal',
                tourTitle: 'M72 World Tour — In The Round 360° Stage',
                dateISO: '2026-11-28',
                dateDisplay: 'Sabtu, 28 Nov 2026',
                timeDisplay: '20:00 WIB',
                city: 'Jakarta',
                venue: 'Stadion Utama Gelora Bung Karno (GBK), Jakarta',
                status: 'Hampir Habis',
                quotaLeft: 'Sisa 9% Kuota',
                startingPrice: 2250000,
                setlist: 'Master of Puppets, Enter Sandman, One, Seek & Destroy, Creeping Death',
                posterCode: 'MT-81',
                image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Snake Pit', desc: 'Area berdiri melingkari panggung 360 derajat', price: 2250000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Tribun bawah sektor Barat & Timur bernomor', price: 3100000 },
                    { id: 'vip', name: 'VIP Box Moth Into Flame', desc: 'Tribun VIP, poster cetak terbatas & jalur khusus', price: 5500000 }
                ]
            },
            {
                id: 'guns-n-roses',
                index: '#03',
                band: "Guns N' Roses",
                subgenre: 'Hard Rock',
                category: 'hard-rock',
                tourTitle: 'Not In This Lifetime... Reloaded Southeast Asia',
                dateISO: '2026-12-12',
                dateDisplay: 'Sabtu, 12 Des 2026',
                timeDisplay: '19:30 WIB',
                city: 'Jakarta',
                venue: 'Stadion Madya Gelora Bung Karno, Jakarta',
                status: 'Tersedia',
                quotaLeft: '54% Tersedia',
                startingPrice: 1800000,
                setlist: "Sweet Child O' Mine, November Rain, Welcome to the Jungle, Paradise City",
                posterCode: 'GNR-85',
                image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Moshpit', desc: 'Area berdiri depan panggung terbuka', price: 1800000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Tribun duduk bernomor bebas halangan', price: 2650000 },
                    { id: 'vip', name: 'VIP Box Paradise', desc: 'Deck observasi khusus + paket merchandise', price: 4600000 }
                ]
            },
            {
                id: 'linkin-park',
                index: '#04',
                band: 'Linkin Park',
                subgenre: 'Alternative Rock / Nu Metal',
                category: 'alt-punk',
                tourTitle: 'From Zero World Tour — Jakarta Stop',
                dateISO: '2027-01-16',
                dateDisplay: 'Sabtu, 16 Jan 2027',
                timeDisplay: '20:00 WIB',
                city: 'Jakarta',
                venue: 'Carnaval Ancol Open Air Stadium, Jakarta',
                status: 'Hampir Habis',
                quotaLeft: 'Sisa 6% Kuota',
                startingPrice: 1750000,
                setlist: 'In the End, Numb, The Emptiness Machine, Faint, Papercut, One Step Closer',
                posterCode: 'LP-00',
                image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Moshpit', desc: 'Zona berdiri utama Hybrid Theory Pit', price: 1750000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Rangka tribun bertingkat pandangan lurus', price: 2400000 },
                    { id: 'vip', name: 'VIP Box Heavy Is The Crown', desc: 'Balkon VIP, akses soundcheck & suvenir resmi', price: 4100000 }
                ]
            },
            {
                id: 'the-offspring',
                index: '#05',
                band: 'The Offspring',
                subgenre: 'Punk Rock',
                category: 'alt-punk',
                tourTitle: 'Supercharged Worldwide Tour — Yogyakarta Special',
                dateISO: '2027-01-30',
                dateDisplay: 'Sabtu, 30 Jan 2027',
                timeDisplay: '19:00 WIB',
                city: 'Yogyakarta',
                venue: 'Stadion Kridosono, Yogyakarta',
                status: 'Tersedia',
                quotaLeft: '72% Tersedia',
                startingPrice: 950000,
                setlist: "The Kids Aren't Alright, Self Esteem, Pretty Fly (For a White Guy), You're Gonna Go Far, Kid",
                posterCode: 'OFS-84',
                image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Circle Pit', desc: 'Lapangan utama Kridosono bebas bergerak', price: 950000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Tribun tertutup sisi barat stadion', price: 1350000 },
                    { id: 'vip', name: 'VIP Box Smash', desc: 'Koridor VIP samping panggung & poster edisi Jogja', price: 2200000 }
                ]
            },
            {
                id: 'avenged-sevenfold',
                index: '#06',
                band: 'Avenged Sevenfold',
                subgenre: 'Heavy Metal',
                category: 'heavy-metal',
                tourTitle: 'Life Is But A Dream... Asian Return',
                dateISO: '2027-02-13',
                dateDisplay: 'Sabtu, 13 Feb 2027',
                timeDisplay: '20:00 WIB',
                city: 'Jakarta',
                venue: 'Stadion Madya Senayan, Jakarta',
                status: 'Hampir Habis',
                quotaLeft: 'Sisa 11% Kuota',
                startingPrice: 1600000,
                setlist: 'Nightmare, Hail to the King, Afterlife, Bat Country, A Little Piece of Heaven, Dear God',
                posterCode: 'A7X-99',
                image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Moshpit', desc: 'Deathbat Pit berdiri di depan panggung', price: 1600000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Kursi bernomor tribun utama', price: 2300000 },
                    { id: 'vip', name: 'VIP Box Deathbat Club', desc: 'Akses prioritas & paket koleksi A7X Indonesia', price: 3850000 }
                ]
            },
            {
                id: 'soad',
                index: '#07',
                band: 'System of a Down',
                subgenre: 'Alternative Metal',
                category: 'heavy-metal',
                secondaryCategory: 'alt-punk',
                tourTitle: 'Wake Up The Souls — Open Air Monument Show',
                dateISO: '2027-02-27',
                dateDisplay: 'Sabtu, 27 Feb 2027',
                timeDisplay: '20:00 WITA',
                city: 'Bali',
                venue: 'Taman Budaya Garuda Wisnu Kencana (GWK), Bali',
                status: 'Hampir Habis',
                quotaLeft: 'Sisa 8% Kuota',
                startingPrice: 1950000,
                setlist: 'Chop Suey!, Toxicity, B.Y.O.B., Aerials, Sugar, Lonely Day',
                posterCode: 'SOAD-94',
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Moshpit', desc: 'Lotus Pond Open Air Moshpit Area', price: 1950000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Riser tempat duduk bertingkat teater GWK', price: 2750000 },
                    { id: 'vip', name: 'VIP Box Toxicity', desc: 'Teras tebing eksklusif & shuttle khusus GWK', price: 4500000 }
                ]
            },
            {
                id: 'radiohead',
                index: '#08',
                band: 'Radiohead',
                subgenre: 'Art Rock / Alternative',
                category: 'classic-art',
                tourTitle: 'Everything In Its Right Place — Audio-Visual Live',
                dateISO: '2027-03-14',
                dateDisplay: 'Minggu, 14 Mar 2027',
                timeDisplay: '19:30 WIB',
                city: 'Jakarta',
                venue: 'Indonesia Arena Senayan (Indoor Acoustics), Jakarta',
                status: 'Hampir Habis',
                quotaLeft: 'Sisa 5% Kuota',
                startingPrice: 2100000,
                setlist: 'Paranoid Android, Karma Police, Creep, No Surprises, Weird Fishes, Idioteque',
                posterCode: 'RH-97',
                image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Floor Standing', desc: 'Lantai arena utama dengan tata suara surround', price: 2100000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Kursi akustik terbaik lower bowl Indonesia Arena', price: 2950000 },
                    { id: 'vip', name: 'VIP Box OK Computer', desc: 'Skybox suite, buklet seni cetak & masuk cepat', price: 4900000 }
                ]
            },
            {
                id: 'the-beatles',
                index: '#09',
                band: 'The Beatles',
                subgenre: 'Classic Rock (Symphonic & Archival Live)',
                category: 'classic-art',
                tourTitle: 'The Beatles: Abbey Road & Rooftop Symphonic Experience',
                dateISO: '2027-03-27',
                dateDisplay: 'Sabtu, 27 Mar 2027',
                timeDisplay: '19:00 WIB',
                city: 'Jakarta',
                venue: 'Plenary Hall JCC Senayan, Jakarta',
                status: 'Tersedia',
                quotaLeft: '61% Tersedia',
                startingPrice: 1200000,
                setlist: 'Hey Jude, Let It Be, Come Together, Here Comes the Sun, A Day in the Life',
                posterCode: 'TB-62',
                image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Cavern Club Floor', desc: 'Area depan panggung orkestra & layar arsip 8K', price: 1200000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Kursi teater empuk tengah Plenary Hall', price: 1850000 },
                    { id: 'vip', name: 'VIP Box Abbey Road', desc: 'Baris terdepan + piringan hitam kompilasi edisi tur', price: 3200000 }
                ]
            },
            {
                id: 'iron-maiden',
                index: '#10',
                band: 'Iron Maiden',
                subgenre: 'Heavy Metal',
                category: 'heavy-metal',
                tourTitle: 'Run For Your Lives World Tour — 50th Anniversary',
                dateISO: '2027-04-17',
                dateDisplay: 'Sabtu, 17 Apr 2027',
                timeDisplay: '20:00 WIB',
                city: 'Jakarta',
                venue: 'Jakarta International Stadium (JIS), Jakarta',
                status: 'Tersedia',
                quotaLeft: '47% Tersedia',
                startingPrice: 1850000,
                setlist: 'The Trooper, Fear of the Dark, Hallowed Be Thy Name, Aces High, Wasted Years',
                posterCode: 'IM-75',
                image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80',
                tiers: [
                    { id: 'fest', name: 'Festival / Trooper Moshpit', desc: 'Area berdiri lapangan utama JIS', price: 1850000 },
                    { id: 'cat1', name: 'Cat 1A Seated', desc: 'Tribun Tier 1 dengan pandangan penuh panggung Eddie', price: 2600000 },
                    { id: 'vip', name: 'VIP Box Powerslave', desc: 'Corporate Box JIS + Trooper Official Merch Pack', price: 4400000 }
                ]
            }
        ];

        // State Variables
        let activeGenre = 'all';
        let activeCity = 'ALL';
        let heroSpotlightIndex = 1; // Starts on Metallica (#02)
        let currentModalConcert = null;
        let currentSelectedTierIndex = 0;
        let currentTicketQty = 1;

        // Cart & Issued Tickets State
        let cartItems = [];
        let issuedTickets = [
            {
                code: 'TKT-2026-DEMO',
                band: 'Metallica',
                tourTitle: 'M72 World Tour — In The Round 360° Stage',
                dateDisplay: 'Sabtu, 28 Nov 2026 • 20:00 WIB',
                venue: 'Stadion Utama Gelora Bung Karno (GBK), Jakarta',
                tierName: 'Festival / Snake Pit',
                qty: 2,
                totalPaid: 4500000,
                buyerName: 'Andi Wijaya (Contoh Demo)',
                buyerEmail: 'andi.rock@tiketin.id',
                issuedAt: '29 Okt 2026'
            }
        ];

        // Utility: Format Number to IDR Currency
        function formatIDR(amount) {
            return 'Rp ' + amount.toLocaleString('id-ID');
        }

        // Utility: Show Flat Toast Notification
        let toastTimer = null;
        function showToast(message) {
            const toast = document.getElementById('flat-toast');
            const msgEl = document.getElementById('flat-toast-message');
            msgEl.textContent = message;
            toast.classList.remove('hidden');
            if (toastTimer) clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.add('hidden');
            }, 3400);
        }

        // 2. Render Hero Quick Roster & Spotlight Card
        function renderHeroSection() {
            const quickRosterEl = document.getElementById('hero-quick-roster');
            quickRosterEl.innerHTML = CONCERTS.map((c, idx) => `
                <button 
                    onclick="selectHeroSpotlight(${idx})" 
                    class="px-2.5 py-1 rounded text-xs font-mono border border-charcoal flat-transition ${idx === heroSpotlightIndex ? 'bg-charcoal text-cream-bg' : 'bg-cream-surface text-charcoal hover:bg-cream-deep'}"
                >
                    ${c.index} ${c.band}
                </button>
            `).join('');

            const spotlight = CONCERTS[heroSpotlightIndex];
            document.getElementById('hero-spotlight-counter').textContent = `${String(heroSpotlightIndex + 1).padStart(2, '0')}/10`;

            const cardEl = document.getElementById('hero-spotlight-card');
            cardEl.innerHTML = `
                <div>
                    <!-- Top Poster Graphic Frame -->
                    <div class="relative border border-charcoal rounded overflow-hidden mb-5 bg-charcoal h-48 sm:h-52">
                        <img 
                            src="${spotlight.image}" 
                            alt="${spotlight.band}" 
                            class="w-full h-full object-cover rock-visual opacity-90"
                            onerror="this.src='https://placehold.co/800x450/191817/FAF7F0?text=${encodeURIComponent(spotlight.band)}'"
                        >
                        <div class="absolute top-3 left-3 flex items-center gap-1.5">
                            <span class="px-2.5 py-1 bg-cream-bg text-charcoal border border-charcoal rounded font-mono text-xs font-bold">
                                ${spotlight.index} // ${spotlight.posterCode}
                            </span>
                            <span class="px-2.5 py-1 ${spotlight.status === 'Hampir Habis' ? 'bg-rust text-cream-bg' : 'bg-cream-surface text-charcoal'} border border-charcoal rounded font-mono text-xs font-semibold">
                                ${spotlight.status}
                            </span>
                        </div>
                        <div class="absolute bottom-3 right-3 px-2.5 py-1 bg-charcoal text-cream-bg border border-cream-bg rounded font-mono text-[11px]">
                            ${spotlight.subgenre}
                        </div>
                    </div>

                    <div class="font-mono text-xs uppercase text-rust font-semibold mb-1">
                        ${spotlight.dateDisplay} • ${spotlight.timeDisplay}
                    </div>
                    <h2 class="font-display font-bold text-3xl text-charcoal tracking-tight mb-1">
                        ${spotlight.band}
                    </h2>
                    <p class="text-sm text-charcoal-muted mb-4">
                        ${spotlight.tourTitle}
                    </p>

                    <div class="p-3 bg-cream-bg border border-charcoal rounded text-xs space-y-1.5 mb-6">
                        <div class="flex justify-between">
                            <span class="font-mono text-charcoal-muted">STADION:</span>
                            <span class="font-semibold text-charcoal text-right">${spotlight.venue}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-mono text-charcoal-muted">STATUS KUOTA:</span>
                            <span class="font-mono font-semibold ${spotlight.status === 'Hampir Habis' ? 'text-rust' : 'text-charcoal'}">${spotlight.quotaLeft}</span>
                        </div>
                    </div>
                </div>

                <div class="pt-4 border-t border-charcoal flex items-center justify-between gap-3">
                    <div>
                        <span class="block font-mono text-[10px] uppercase text-charcoal-muted">HARGA TIKET MULAI</span>
                        <span class="font-display font-bold text-xl text-charcoal">${formatIDR(spotlight.startingPrice)}</span>
                    </div>
                    <button onclick="openBookingModal('${spotlight.id}')" class="btn-flat-dark px-5 py-3 rounded font-display font-bold text-xs uppercase tracking-wider">
                        Pesan Tiket Sekarang →
                    </button>
                </div>
            `;
        }

        function cycleHeroSpotlight(direction) {
            heroSpotlightIndex = (heroSpotlightIndex + direction + CONCERTS.length) % CONCERTS.length;
            renderHeroSection();
        }

        function selectHeroSpotlight(index) {
            heroSpotlightIndex = index;
            renderHeroSection();
        }

        // 3. Render Concert Catalog Grid
        function renderConcertGrid() {
            const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
            const sortBy = document.getElementById('sort-select').value;
            const onlyAlmostSold = document.getElementById('filter-almost-sold').checked;

            const clearBtn = document.getElementById('clear-search-btn');
            if (searchQuery.length > 0) {
                clearBtn.classList.remove('hidden');
            } else {
                clearBtn.classList.add('hidden');
            }

            // Filter Concerts
            let filtered = CONCERTS.filter(c => {
                const matchesGenre = activeGenre === 'all' || c.category === activeGenre || c.secondaryCategory === activeGenre;
                const matchesSearch = !searchQuery || 
                    c.band.toLowerCase().includes(searchQuery) ||
                    c.subgenre.toLowerCase().includes(searchQuery) ||
                    c.tourTitle.toLowerCase().includes(searchQuery) ||
                    c.venue.toLowerCase().includes(searchQuery) ||
                    c.city.toLowerCase().includes(searchQuery);
                const matchesStatus = !onlyAlmostSold || c.status === 'Hampir Habis';
                return matchesGenre && matchesSearch && matchesStatus;
            });

            // Sort Concerts
            filtered.sort((a, b) => {
                if (sortBy === 'date-asc') return a.dateISO.localeCompare(b.dateISO);
                if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
                if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
                if (sortBy === 'name-asc') return a.band.localeCompare(b.band);
                return 0;
            });

            document.getElementById('visible-count').textContent = filtered.length;

            const gridEl = document.getElementById('concert-grid');
            const emptyEl = document.getElementById('empty-search-state');

            if (filtered.length === 0) {
                gridEl.innerHTML = '';
                emptyEl.classList.remove('hidden');
                return;
            }

            emptyEl.classList.add('hidden');
            gridEl.innerHTML = filtered.map(c => `
                <article class="concert-card rounded flex flex-col justify-between overflow-hidden">
                    <div>
                        <!-- Top Card Header Bar -->
                        <div class="px-4 py-2.5 bg-cream-deep border-b border-charcoal flex items-center justify-between font-mono text-xs">
                            <span class="font-bold text-charcoal">${c.index} // ${c.posterCode}</span>
                            <span class="px-2 py-0.5 rounded border border-charcoal text-[11px] ${c.status === 'Hampir Habis' ? 'bg-rust text-cream-bg' : 'bg-cream-bg text-charcoal'}">
                                ${c.status}
                            </span>
                        </div>

                        <!-- Visual Stage Banner -->
                        <div class="relative h-44 bg-charcoal border-b border-charcoal overflow-hidden">
                            <img 
                                src="${c.image}" 
                                alt="Konser ${c.band}" 
                                loading="lazy"
                                class="w-full h-full object-cover rock-visual"
                                onerror="this.src='https://placehold.co/600x400/191817/FAF7F0?text=${encodeURIComponent(c.band)}'"
                            >
                            <div class="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                                <span class="px-2.5 py-1 bg-cream-bg text-charcoal border border-charcoal rounded font-mono text-[11px] font-medium">
                                    ${c.subgenre}
                                </span>
                                <span class="px-2 py-1 bg-charcoal text-cream-bg border border-cream-bg rounded font-mono text-[11px]">
                                    ${c.city}
                                </span>
                            </div>
                        </div>

                        <!-- Card Content -->
                        <div class="p-5">
                            <div class="font-mono text-xs text-rust font-semibold mb-1">
                                ${c.dateDisplay} • ${c.timeDisplay}
                            </div>
                            <h3 class="font-display font-bold text-2xl text-charcoal tracking-tight mb-1">
                                ${c.band}
                            </h3>
                            <p class="text-xs text-charcoal-muted font-medium mb-4 line-clamp-1">
                                ${c.tourTitle}
                            </p>

                            <!-- Venue & Setlist Info Box -->
                            <div class="bg-cream-bg border border-charcoal rounded p-3 text-xs space-y-2">
                                <div class="flex items-start gap-2">
                                    <span class="font-mono text-charcoal-muted uppercase shrink-0">VENUE:</span>
                                    <span class="font-medium text-charcoal">${c.venue}</span>
                                </div>
                                <div class="flex items-start gap-2 pt-2 border-t border-cream-border">
                                    <span class="font-mono text-charcoal-muted uppercase shrink-0">LAGU:</span>
                                    <span class="text-charcoal-muted line-clamp-1">${c.setlist}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card Footer: Price & Flat CTA Button -->
                    <div class="px-5 py-4 bg-cream-bg border-t border-charcoal flex items-center justify-between gap-3">
                        <div>
                            <span class="block font-mono text-[10px] uppercase text-charcoal-muted">MULAI DARI (FLAT)</span>
                            <span class="font-display font-bold text-lg text-charcoal">${formatIDR(c.startingPrice)}</span>
                        </div>
                        <button 
                            onclick="openBookingModal('${c.id}')" 
                            class="btn-flat-dark px-4 py-2.5 rounded font-display font-bold text-xs uppercase tracking-wider"
                        >
                            Pesan Tiket
                        </button>
                    </div>
                </article>
            `).join('');
        }

        function setGenreFilter(genre) {
            activeGenre = genre;
            document.querySelectorAll('.filter-pill').forEach(btn => {
                if (btn.getAttribute('data-genre') === genre) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            handleFilterAndSort();
        }

        function handleFilterAndSort() {
            renderConcertGrid();
        }

        function clearSearch() {
            document.getElementById('search-input').value = '';
            handleFilterAndSort();
        }

        function resetAllFilters() {
            document.getElementById('search-input').value = '';
            document.getElementById('filter-almost-sold').checked = false;
            document.getElementById('sort-select').value = 'date-asc';
            setGenreFilter('all');
        }

        // 4. Render Chronological Tour Schedule Table
        function renderScheduleTable() {
            const tbody = document.getElementById('schedule-table-body');
            const sortedByDate = [...CONCERTS]
                .filter(c => activeCity === 'ALL' || c.city === activeCity)
                .sort((a, b) => a.dateISO.localeCompare(b.dateISO));

            tbody.innerHTML = sortedByDate.map(c => `
                <tr class="schedule-row">
                    <td class="py-3.5 px-4 border-r border-charcoal font-mono text-xs whitespace-nowrap">
                        <div class="font-bold text-charcoal">${c.dateDisplay}</div>
                        <div class="text-charcoal-muted">${c.timeDisplay}</div>
                    </td>
                    <td class="py-3.5 px-4 border-r border-charcoal">
                        <div class="font-display font-bold text-base text-charcoal">${c.band}</div>
                        <div class="font-mono text-xs text-charcoal-muted">${c.subgenre}</div>
                    </td>
                    <td class="py-3.5 px-4 border-r border-charcoal text-xs text-charcoal-muted max-w-xs">
                        ${c.tourTitle}
                    </td>
                    <td class="py-3.5 px-4 border-r border-charcoal text-xs">
                        <span class="font-semibold text-charcoal block">${c.venue}</span>
                        <span class="font-mono text-[11px] text-charcoal-muted">Kota: ${c.city}</span>
                    </td>
                    <td class="py-3.5 px-4 border-r border-charcoal whitespace-nowrap">
                        <span class="font-mono text-xs px-2 py-0.5 rounded border border-charcoal ${c.status === 'Hampir Habis' ? 'bg-rust text-cream-bg' : 'bg-cream-surface text-charcoal'}">
                            ${c.quotaLeft}
                        </span>
                    </td>
                    <td class="py-3.5 px-4 border-r border-charcoal font-mono font-semibold text-sm whitespace-nowrap">
                        ${formatIDR(c.startingPrice)}
                    </td>
                    <td class="py-3.5 px-4 text-center whitespace-nowrap">
                        <button onclick="openBookingModal('${c.id}')" class="btn-flat-outline px-3 py-1.5 rounded font-mono text-xs uppercase font-semibold">
                            Pilih Tiket
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        function filterScheduleCity(city) {
            activeCity = city;
            document.querySelectorAll('.city-pill').forEach(btn => {
                if (btn.getAttribute('data-city') === city) {
                    btn.className = 'city-pill active btn-flat-dark px-3 py-1.5 rounded text-xs font-mono uppercase';
                } else {
                    btn.className = 'city-pill btn-flat-outline px-3 py-1.5 rounded text-xs font-mono uppercase';
                }
            });
            renderScheduleTable();
        }

        // 5. Interactive Booking Modal Logic
        function openBookingModal(concertId) {
            const concert = CONCERTS.find(c => c.id === concertId);
            if (!concert) return;

            currentModalConcert = concert;
            currentSelectedTierIndex = 0;
            currentTicketQty = 1;

            document.getElementById('modal-band-index').textContent = concert.index;
            document.getElementById('modal-band-name').textContent = concert.band;
            document.getElementById('modal-tour-title').textContent = concert.tourTitle;
            document.getElementById('modal-date-time').textContent = `${concert.dateDisplay} • ${concert.timeDisplay}`;
            document.getElementById('modal-venue').textContent = concert.venue;
            document.getElementById('modal-setlist').textContent = concert.setlist;

            const statusBadge = document.getElementById('modal-status-badge');
            statusBadge.textContent = concert.quotaLeft;
            statusBadge.className = `font-mono uppercase px-2 py-0.5 rounded border border-charcoal text-xs ${concert.status === 'Hampir Habis' ? 'bg-rust text-cream-bg' : 'bg-cream-deep text-charcoal'}`;

            document.getElementById('modal-ticket-qty').value = 1;
            document.getElementById('booking-error-msg').classList.add('hidden');

            renderModalTiers();
            updateModalSubtotal();

            document.getElementById('booking-modal').classList.remove('hidden');
        }

        function closeBookingModal() {
            document.getElementById('booking-modal').classList.add('hidden');
        }

        function renderModalTiers() {
            if (!currentModalConcert) return;
            const container = document.getElementById('modal-tier-list');
            container.innerHTML = currentModalConcert.tiers.map((tier, idx) => {
                const isSelected = idx === currentSelectedTierIndex;
                return `
                    <button 
                        type="button"
                        onclick="selectModalTier(${idx})"
                        class="text-left p-3.5 rounded border border-charcoal flat-transition flex flex-col justify-between ${isSelected ? 'bg-charcoal text-cream-bg' : 'bg-cream-surface text-charcoal hover:bg-cream-deep'}"
                    >
                        <div>
                            <div class="flex items-center justify-between gap-2 mb-1">
                                <span class="font-display font-bold text-sm">${tier.name}</span>
                                <span class="font-mono text-[10px] px-1.5 py-0.5 rounded border ${isSelected ? 'border-cream-bg bg-rust text-cream-bg' : 'border-charcoal bg-cream-bg text-charcoal'}">
                                    ${isSelected ? 'DIPILIH' : 'PILIH'}
                                </span>
                            </div>
                            <p class="text-xs ${isSelected ? 'text-cream-deep' : 'text-charcoal-muted'} mb-3 leading-snug">
                                ${tier.desc}
                            </p>
                        </div>
                        <div class="font-mono font-bold text-sm pt-2 border-t ${isSelected ? 'border-cream-bg/30 text-cream-bg' : 'border-cream-border text-rust'}">
                            ${formatIDR(tier.price)}
                        </div>
                    </button>
                `;
            }).join('');
        }

        function selectModalTier(index) {
            currentSelectedTierIndex = index;
            renderModalTiers();
            updateModalSubtotal();
        }

        function adjustTicketQty(delta) {
            const nextQty = currentTicketQty + delta;
            if (nextQty < 1 || nextQty > 6) return;
            currentTicketQty = nextQty;
            document.getElementById('modal-ticket-qty').value = currentTicketQty;
            updateModalSubtotal();
        }

        function updateModalSubtotal() {
            if (!currentModalConcert) return;
            const tier = currentModalConcert.tiers[currentSelectedTierIndex];
            const total = tier.price * currentTicketQty;
            document.getElementById('modal-summary-line').textContent = `${currentTicketQty}x ${tier.name} (${currentModalConcert.band}) • Biaya Admin Rp 0`;
            document.getElementById('modal-total-price').textContent = formatIDR(total);
        }

        // Add to Cart Action
        function addSelectedToCart() {
            if (!currentModalConcert) return;
            const tier = currentModalConcert.tiers[currentSelectedTierIndex];
            cartItems.push({
                cartItemId: 'CRT-' + Date.now() + '-' + Math.floor(Math.random() * 100),
                concertId: currentModalConcert.id,
                band: currentModalConcert.band,
                tourTitle: currentModalConcert.tourTitle,
                dateDisplay: `${currentModalConcert.dateDisplay} • ${currentModalConcert.timeDisplay}`,
                venue: currentModalConcert.venue,
                tierName: tier.name,
                unitPrice: tier.price,
                qty: currentTicketQty,
                subtotal: tier.price * currentTicketQty
            });

            updateCartCounters();
            closeBookingModal();
            showToast(`${currentTicketQty}x Tiket ${currentModalConcert.band} ditambahkan ke Tiket Saya.`);
        }

        // Instant Booking Action (Generates Immediate Official Ticket Code)
        function completeInstantBooking() {
            if (!currentModalConcert) return;
            const nameInput = document.getElementById('buyer-name').value.trim();
            const emailInput = document.getElementById('buyer-email').value.trim();
            const errorEl = document.getElementById('booking-error-msg');

            if (!nameInput || !emailInput || !emailInput.includes('@')) {
                errorEl.textContent = 'Mohon lengkapi Nama Lengkap dan alamat Email aktif untuk penerbitan E-Ticket.';
                errorEl.classList.remove('hidden');
                return;
            }

            errorEl.classList.add('hidden');
            const tier = currentModalConcert.tiers[currentSelectedTierIndex];
            const randomCode = 'TKT-2026-' + Math.random().toString(36).substring(2, 6).toUpperCase();

            const newTicket = {
                code: randomCode,
                band: currentModalConcert.band,
                tourTitle: currentModalConcert.tourTitle,
                dateDisplay: `${currentModalConcert.dateDisplay} • ${currentModalConcert.timeDisplay}`,
                venue: currentModalConcert.venue,
                tierName: tier.name,
                qty: currentTicketQty,
                totalPaid: tier.price * currentTicketQty,
                buyerName: nameInput,
                buyerEmail: emailInput,
                issuedAt: 'Baru Saja'
            };

            issuedTickets.unshift(newTicket);
            updateCartCounters();
            closeBookingModal();

            // Open Wallet Modal directly on the Issued E-Tickets Tab
            openCartModal('issued');
            showToast(`E-Ticket ${newTicket.code} untuk ${newTicket.band} berhasil diterbitkan!`);
        }

        // 6. Cart & Issued E-Ticket Wallet Modal Logic
        function updateCartCounters() {
            const totalCartTickets = cartItems.reduce((sum, item) => sum + item.qty, 0);
            const totalIssued = issuedTickets.length;
            document.getElementById('nav-cart-count').textContent = totalCartTickets + totalIssued;
            document.getElementById('tab-cart-count').textContent = cartItems.length;
            document.getElementById('tab-issued-count').textContent = totalIssued;
        }

        function openCartModal(defaultTab = 'cart') {
            renderWalletViews();
            switchWalletTab(defaultTab);
            document.getElementById('cart-modal').classList.remove('hidden');
        }

        function closeCartModal() {
            document.getElementById('cart-modal').classList.add('hidden');
        }

        function switchWalletTab(tab) {
            const cartView = document.getElementById('wallet-cart-view');
            const issuedView = document.getElementById('wallet-issued-view');
            const btnCart = document.getElementById('tab-btn-cart');
            const btnIssued = document.getElementById('tab-btn-issued');

            if (tab === 'cart') {
                cartView.classList.remove('hidden');
                issuedView.classList.add('hidden');
                btnCart.className = 'flex-1 py-2.5 text-xs font-mono uppercase font-semibold bg-charcoal text-cream-bg flat-transition';
                btnIssued.className = 'flex-1 py-2.5 text-xs font-mono uppercase font-semibold bg-cream-surface text-charcoal flat-transition border-l border-charcoal';
            } else {
                cartView.classList.add('hidden');
                issuedView.classList.remove('hidden');
                btnCart.className = 'flex-1 py-2.5 text-xs font-mono uppercase font-semibold bg-cream-surface text-charcoal flat-transition';
                btnIssued.className = 'flex-1 py-2.5 text-xs font-mono uppercase font-semibold bg-charcoal text-cream-bg flat-transition border-l border-charcoal';
            }
        }

        function renderWalletViews() {
            // Render Cart Items
            const cartContainer = document.getElementById('cart-items-container');
            const checkoutFooter = document.getElementById('cart-checkout-footer');

            if (cartItems.length === 0) {
                cartContainer.innerHTML = `
                    <div class="p-8 bg-cream-surface border border-charcoal rounded text-center">
                        <p class="font-mono text-xs text-charcoal-muted mb-3">KERANJANG TIKET MASIH KOSONG</p>
                        <button onclick="closeCartModal()" class="btn-flat-dark px-4 py-2 rounded font-mono text-xs uppercase">
                            Pilih Konser di Katalog
                        </button>
                    </div>
                `;
                checkoutFooter.classList.add('hidden');
            } else {
                checkoutFooter.classList.remove('hidden');
                let grandTotal = 0;
                cartContainer.innerHTML = cartItems.map(item => {
                    grandTotal += item.subtotal;
                    return `
                        <div class="p-4 bg-cream-surface border border-charcoal rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <div class="font-display font-bold text-lg text-charcoal">${item.band}</div>
                                <div class="font-mono text-xs text-rust">${item.qty}x ${item.tierName} • ${ item.dateDisplay }</div>
                                <div class="text-xs text-charcoal-muted">${item.venue}</div>
                            </div>
                            <div class="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-cream-border">
                                <div class="font-mono font-bold text-sm text-charcoal">${formatIDR(item.subtotal)}</div>
                                <button onclick="removeCartItem('${item.cartItemId}')" class="px-2.5 py-1 bg-cream-bg border border-charcoal rounded font-mono text-xs hover:bg-rust hover:text-cream-bg flat-transition">
                                    Hapus
                                </button>
                            </div>
                        </div>
                    `;
                }).join('');
                document.getElementById('cart-grand-total').textContent = formatIDR(grandTotal);
            }

            // Render Issued E-Tickets
            const issuedContainer = document.getElementById('issued-tickets-container');
            issuedContainer.innerHTML = issuedTickets.map(t => `
                <div class="bg-cream-surface border border-charcoal rounded overflow-hidden">
                    <div class="bg-charcoal text-cream-bg px-4 py-2.5 flex items-center justify-between font-mono text-xs">
                        <span>E-TICKET RESMI // ${t.code}</span>
                        <span class="px-2 py-0.5 bg-rust text-cream-bg rounded">AKTIF & TERVERIFIKASI</span>
                    </div>
                    <div class="p-4 space-y-3">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                                <h4 class="font-display font-bold text-xl text-charcoal">${t.band}</h4>
                                <p class="text-xs text-charcoal-muted">${t.tourTitle}</p>
                            </div>
                            <div class="font-mono text-xs sm:text-right">
                                <div class="font-bold text-charcoal">${t.qty}x ${t.tierName}</div>
                                <div class="text-rust font-semibold">${formatIDR(t.totalPaid)}</div>
                            </div>
                        </div>
                        <div class="ticket-divider pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                            <div>
                                <span class="text-charcoal-muted block">WAKTU & VENUE:</span>
                                <span class="text-charcoal">${t.dateDisplay}</span><br>
                                <span class="text-charcoal">${t.venue}</span>
                            </div>
                            <div>
                                <span class="text-charcoal-muted block">PEMEGANG TIKET:</span>
                                <span class="text-charcoal font-semibold">${t.buyerName}</span><br>
                                <span class="text-charcoal-muted">${t.buyerEmail}</span>
                            </div>
                        </div>
                        <div class="pt-2 flex items-center justify-between">
                            <span class="font-mono text-[11px] text-charcoal-muted">Diterbitkan: ${t.issuedAt}</span>
                            <button onclick="copyTicketCode('${t.code}')" class="btn-flat-outline px-3 py-1 rounded font-mono text-xs">
                                Salin Kode Tiket
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function removeCartItem(cartItemId) {
            cartItems = cartItems.filter(i => i.cartItemId !== cartItemId);
            updateCartCounters();
            renderWalletViews();
        }

        function checkoutAllCart() {
            if (cartItems.length === 0) return;
            const buyerName = document.getElementById('cart-buyer-name').value.trim() || 'Penggemar Rock Indonesia';
            const buyerEmail = document.getElementById('cart-buyer-email').value.trim() || 'tiket@tiketin.id';

            cartItems.forEach(item => {
                const code = 'TKT-2026-' + Math.random().toString(36).substring(2, 6).toUpperCase();
                issuedTickets.unshift({
                    code,
                    band: item.band,
                    tourTitle: item.tourTitle,
                    dateDisplay: item.dateDisplay,
                    venue: item.venue,
                    tierName: item.tierName,
                    qty: item.qty,
                    totalPaid: item.subtotal,
                    buyerName,
                    buyerEmail,
                    issuedAt: 'Baru Saja'
                });
            });

            cartItems = [];
            updateCartCounters();
            renderWalletViews();
            switchWalletTab('issued');
            showToast('Semua tiket di keranjang berhasil diterbitkan!');
        }

        function copyTicketCode(code) {
            const tempInput = document.createElement('input');
            tempInput.value = code;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            showToast(`Kode tiket ${code} berhasil disalin ke clipboard.`);
        }

        // 7. Order Lookup Verification Modal
        function openOrderLookupModal() {
            verifyTicketCode();
            document.getElementById('lookup-modal').classList.remove('hidden');
        }

        function closeOrderLookupModal() {
            document.getElementById('lookup-modal').classList.add('hidden');
        }

        function verifyTicketCode() {
            const codeQuery = document.getElementById('lookup-code-input').value.trim().toUpperCase();
            const resultBox = document.getElementById('lookup-result-box');
            const found = issuedTickets.find(t => t.code.toUpperCase() === codeQuery);

            if (found) {
                resultBox.innerHTML = `
                    <div class="flex items-center justify-between border-b border-charcoal pb-2">
                        <span class="font-mono font-bold text-charcoal">${found.code}</span>
                        <span class="px-2 py-0.5 bg-charcoal text-cream-bg font-mono text-[10px] rounded">TIKET VALID & RESMI</span>
                    </div>
                    <div class="pt-1 space-y-1">
                        <div><strong>Konser:</strong> ${found.band} (${found.tourTitle})</div>
                        <div><strong>Kategori:</strong> ${found.qty}x ${found.tierName}</div>
                        <div><strong>Jadwal:</strong> ${found.dateDisplay}</div>
                        <div><strong>Lokasi:</strong> ${found.venue}</div>
                        <div><strong>Pemegang:</strong> ${found.buyerName} (${found.buyerEmail})</div>
                    </div>
                `;
            } else {
                resultBox.innerHTML = `
                    <div class="font-mono text-rust font-semibold">KODE TIDAK DITEMUKAN</div>
                    <p class="text-charcoal-muted">Pastikan kode berformat TKT-2026-XXXX. Coba masukkan <strong>TKT-2026-DEMO</strong> untuk contoh verifikasi.</p>
                `;
            }
        }

        // 8. Mobile Menu & Newsletter
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function handleNewsletterSubmit(e) {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            const feedback = document.getElementById('newsletter-feedback');
            feedback.textContent = `Terdaftar: ${emailInput.value}. Kami akan mengirimkan jadwal presale berikutnya.`;
            feedback.classList.remove('hidden');
            emailInput.value = '';
        }

        // Close modals on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeBookingModal();
                closeCartModal();
                closeOrderLookupModal();
            }
        });

        // Initialize Page on Load
        window.onload = function () {
            renderHeroSection();
            renderConcertGrid();
            renderScheduleTable();
            updateCartCounters();
        };
