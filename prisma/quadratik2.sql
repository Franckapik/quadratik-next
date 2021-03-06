PGDMP         7                z         
   quadratik2    13.5 (Debian 13.5-1.pgdg100+1)    14.1 (Debian 14.1-1.pgdg100+1) E               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17524 
   quadratik2    DATABASE     _   CREATE DATABASE quadratik2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'fr_FR.UTF-8';
    DROP DATABASE quadratik2;
                fanchovh    false            ?            1259    17640    auth    TABLE     ?   CREATE TABLE public.auth (
    auth_id smallint NOT NULL,
    session_id character varying(80) NOT NULL,
    "user" character varying(20) NOT NULL,
    paswd character varying(20) NOT NULL
);
    DROP TABLE public.auth;
       public         heap    fanchovh    false            ?            1259    17619    business    TABLE     0  CREATE TABLE public.business (
    tel character varying(12),
    siret character varying(50) NOT NULL,
    sirene character varying(50) NOT NULL,
    postal integer NOT NULL,
    owner character varying(30),
    business character varying(50) NOT NULL,
    mail character varying(30) NOT NULL,
    logo character varying(40),
    iban character varying(60),
    country character varying(6) NOT NULL,
    city character varying(50) NOT NULL,
    bic character varying(20),
    ape character varying(10) NOT NULL,
    address character varying(80) NOT NULL
);
    DROP TABLE public.business;
       public         heap    fanchovh    false            ?            1259    17606 
   collection    TABLE     ?   CREATE TABLE public.collection (
    collection_id smallint NOT NULL,
    col_name character varying(50) NOT NULL,
    "desc" text NOT NULL,
    folder character varying(50),
    col_publish boolean NOT NULL
);
    DROP TABLE public.collection;
       public         heap    fanchovh    false            ?            1259    17539    customer    TABLE     k  CREATE TABLE public.customer (
    user_id smallint NOT NULL,
    name character varying(40) NOT NULL,
    firstname character varying(40) NOT NULL,
    address text NOT NULL,
    postal integer NOT NULL,
    mail character varying(50) NOT NULL,
    city character varying(46) NOT NULL,
    country character varying(56) NOT NULL,
    session_id text NOT NULL
);
    DROP TABLE public.customer;
       public         heap    fanchovh    false            ?            1259    17627    delivery    TABLE     ?  CREATE TABLE public.delivery (
    delivery_id smallint NOT NULL,
    recipient character varying(50) NOT NULL,
    city character varying(72) NOT NULL,
    country character varying(30) NOT NULL,
    type character varying(30) NOT NULL,
    postal character varying(5) NOT NULL,
    fdp smallint,
    service_point integer,
    carrier character varying,
    colis_nb smallint,
    recipient_address character varying
);
    DROP TABLE public.delivery;
       public         heap    fanchovh    false            ?            1259    17566    discount    TABLE     ?   CREATE TABLE public.discount (
    reduction smallint NOT NULL,
    discount_id smallint NOT NULL,
    code character varying(6) NOT NULL,
    expiration date
);
    DROP TABLE public.discount;
       public         heap    fanchovh    false            ?            1259    17553    invoice    TABLE       CREATE TABLE public.invoice (
    user_id smallint NOT NULL,
    invoice_id smallint NOT NULL,
    discount_id smallint,
    order_date date,
    status_id smallint,
    delivery_id smallint,
    transaction_id smallint,
    order_number smallint NOT NULL
);
    DROP TABLE public.invoice;
       public         heap    fanchovh    false            ?            1259    36569    item    TABLE     ?   CREATE TABLE public.item (
    item_id smallint NOT NULL,
    invoice_id smallint NOT NULL,
    product_id smallint NOT NULL,
    qty smallint NOT NULL,
    total smallint NOT NULL,
    price smallint NOT NULL
);
    DROP TABLE public.item;
       public         heap    fanchovh    false            ?            1259    17773    material    TABLE     ?   CREATE TABLE public.material (
    value integer NOT NULL,
    name text NOT NULL,
    price numeric NOT NULL,
    stock character varying,
    brand character varying NOT NULL,
    label text NOT NULL,
    provider character varying NOT NULL
);
    DROP TABLE public.material;
       public         heap    fanchovh    false            ?            1259    17632    news    TABLE     ?   CREATE TABLE public.news (
    news_id smallint NOT NULL,
    page character varying(30),
    title character varying(80) NOT NULL,
    "desc" text NOT NULL,
    img character varying(40),
    link character varying(80)
);
    DROP TABLE public.news;
       public         heap    fanchovh    false            ?            1259    17614 	   packaging    TABLE       CREATE TABLE public.packaging (
    packaging_id smallint NOT NULL,
    length smallint NOT NULL,
    width smallint NOT NULL,
    weight smallint,
    depth smallint NOT NULL,
    charge smallint,
    unit smallint NOT NULL,
    reference character varying(20) NOT NULL
);
    DROP TABLE public.packaging;
       public         heap    fanchovh    false            ?            1259    17598    performance    TABLE     ?   CREATE TABLE public.performance (
    performance_id smallint NOT NULL,
    "desc" text NOT NULL,
    freq_min smallint NOT NULL,
    freq_max smallint NOT NULL,
    spectre character varying(20) NOT NULL
);
    DROP TABLE public.performance;
       public         heap    fanchovh    false            ?            1259    17585    product    TABLE     ^  CREATE TABLE public.product (
    product_id smallint NOT NULL,
    performance_id smallint NOT NULL,
    name character varying(40) NOT NULL,
    price smallint NOT NULL,
    img text,
    stock text,
    collection_id smallint NOT NULL,
    packaging_id smallint NOT NULL,
    property_id smallint NOT NULL,
    product_publish boolean NOT NULL
);
    DROP TABLE public.product;
       public         heap    fanchovh    false            ?            1259    17593    property    TABLE     ?  CREATE TABLE public.property (
    property_id smallint NOT NULL,
    depth smallint NOT NULL,
    length smallint NOT NULL,
    weight smallint NOT NULL,
    width smallint NOT NULL,
    width_cel smallint NOT NULL,
    prime_nb smallint NOT NULL,
    part_nb smallint NOT NULL,
    cel_nb smallint NOT NULL,
    paint boolean NOT NULL,
    wood character varying(20) NOT NULL,
    finish character varying(20),
    type character varying(20) NOT NULL,
    thickness smallint
);
    DROP TABLE public.property;
       public         heap    fanchovh    false            ?            1259    17531    session    TABLE     q   CREATE TABLE public.session (
    session_id text NOT NULL,
    expired date NOT NULL,
    sess text NOT NULL
);
    DROP TABLE public.session;
       public         heap    fanchovh    false            ?            1259    17558    status    TABLE     ^   CREATE TABLE public.status (
    status_id smallint NOT NULL,
    status_msg text NOT NULL
);
    DROP TABLE public.status;
       public         heap    fanchovh    false            ?            1259    17719    transaction    TABLE     A  CREATE TABLE public.transaction (
    amount smallint NOT NULL,
    status character varying(20) NOT NULL,
    mode character varying(50),
    date_created date,
    date_payment date,
    last_numbers smallint,
    card_brand character varying,
    "desc" character varying(100),
    transaction_id smallint NOT NULL
);
    DROP TABLE public.transaction;
       public         heap    fanchovh    false            ?            1259    17571    transporter    TABLE       CREATE TABLE public.transporter (
    transporter_id smallint NOT NULL,
    col_date date,
    fdp smallint NOT NULL,
    del_date date,
    service_point text,
    order_date date,
    reference text,
    colis_nb smallint,
    carrier character varying NOT NULL
);
    DROP TABLE public.transporter;
       public         heap    fanchovh    false                      0    17640    auth 
   TABLE DATA           B   COPY public.auth (auth_id, session_id, "user", paswd) FROM stdin;
    public          fanchovh    false    214   ?X       ?          0    17619    business 
   TABLE DATA           ?   COPY public.business (tel, siret, sirene, postal, owner, business, mail, logo, iban, country, city, bic, ape, address) FROM stdin;
    public          fanchovh    false    211   ?X       ?          0    17606 
   collection 
   TABLE DATA           Z   COPY public.collection (collection_id, col_name, "desc", folder, col_publish) FROM stdin;
    public          fanchovh    false    209   ?Y       ?          0    17539    customer 
   TABLE DATA           n   COPY public.customer (user_id, name, firstname, address, postal, mail, city, country, session_id) FROM stdin;
    public          fanchovh    false    201   ?Z                  0    17627    delivery 
   TABLE DATA           ?   COPY public.delivery (delivery_id, recipient, city, country, type, postal, fdp, service_point, carrier, colis_nb, recipient_address) FROM stdin;
    public          fanchovh    false    212   ?[       ?          0    17566    discount 
   TABLE DATA           L   COPY public.discount (reduction, discount_id, code, expiration) FROM stdin;
    public          fanchovh    false    204   ?\       ?          0    17553    invoice 
   TABLE DATA           ?   COPY public.invoice (user_id, invoice_id, discount_id, order_date, status_id, delivery_id, transaction_id, order_number) FROM stdin;
    public          fanchovh    false    202   ?\                 0    36569    item 
   TABLE DATA           R   COPY public.item (item_id, invoice_id, product_id, qty, total, price) FROM stdin;
    public          fanchovh    false    217   ]                 0    17773    material 
   TABLE DATA           U   COPY public.material (value, name, price, stock, brand, label, provider) FROM stdin;
    public          fanchovh    false    216   B]                 0    17632    news 
   TABLE DATA           G   COPY public.news (news_id, page, title, "desc", img, link) FROM stdin;
    public          fanchovh    false    213   b^       ?          0    17614 	   packaging 
   TABLE DATA           h   COPY public.packaging (packaging_id, length, width, weight, depth, charge, unit, reference) FROM stdin;
    public          fanchovh    false    210   ^       ?          0    17598    performance 
   TABLE DATA           Z   COPY public.performance (performance_id, "desc", freq_min, freq_max, spectre) FROM stdin;
    public          fanchovh    false    208   ?^       ?          0    17585    product 
   TABLE DATA           ?   COPY public.product (product_id, performance_id, name, price, img, stock, collection_id, packaging_id, property_id, product_publish) FROM stdin;
    public          fanchovh    false    206   r_       ?          0    17593    property 
   TABLE DATA           ?   COPY public.property (property_id, depth, length, weight, width, width_cel, prime_nb, part_nb, cel_nb, paint, wood, finish, type, thickness) FROM stdin;
    public          fanchovh    false    207   ?_       ?          0    17531    session 
   TABLE DATA           <   COPY public.session (session_id, expired, sess) FROM stdin;
    public          fanchovh    false    200   d`       ?          0    17558    status 
   TABLE DATA           7   COPY public.status (status_id, status_msg) FROM stdin;
    public          fanchovh    false    203   a                 0    17719    transaction 
   TABLE DATA           ?   COPY public.transaction (amount, status, mode, date_created, date_payment, last_numbers, card_brand, "desc", transaction_id) FROM stdin;
    public          fanchovh    false    215   Qa       ?          0    17571    transporter 
   TABLE DATA           ?   COPY public.transporter (transporter_id, col_date, fdp, del_date, service_point, order_date, reference, colis_nb, carrier) FROM stdin;
    public          fanchovh    false    205   ?a       a           2606    17644    auth auth_pk 
   CONSTRAINT     O   ALTER TABLE ONLY public.auth
    ADD CONSTRAINT auth_pk PRIMARY KEY (auth_id);
 6   ALTER TABLE ONLY public.auth DROP CONSTRAINT auth_pk;
       public            fanchovh    false    214            [           2606    17626    business business_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.business
    ADD CONSTRAINT business_pk PRIMARY KEY (business);
 >   ALTER TABLE ONLY public.business DROP CONSTRAINT business_pk;
       public            fanchovh    false    211            W           2606    17613    collection collection_pk 
   CONSTRAINT     a   ALTER TABLE ONLY public.collection
    ADD CONSTRAINT collection_pk PRIMARY KEY (collection_id);
 B   ALTER TABLE ONLY public.collection DROP CONSTRAINT collection_pk;
       public            fanchovh    false    209            G           2606    17546    customer customer_pk 
   CONSTRAINT     W   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pk PRIMARY KEY (user_id);
 >   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pk;
       public            fanchovh    false    201            ]           2606    17631    delivery delivery_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pk PRIMARY KEY (delivery_id);
 >   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_pk;
       public            fanchovh    false    212            M           2606    17570    discount discount_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.discount
    ADD CONSTRAINT discount_pk PRIMARY KEY (discount_id);
 >   ALTER TABLE ONLY public.discount DROP CONSTRAINT discount_pk;
       public            fanchovh    false    204            I           2606    17557    invoice invoice_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT invoice_pk PRIMARY KEY (invoice_id);
 <   ALTER TABLE ONLY public.invoice DROP CONSTRAINT invoice_pk;
       public            fanchovh    false    202            g           2606    36573    item item_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (item_id);
 8   ALTER TABLE ONLY public.item DROP CONSTRAINT item_pkey;
       public            fanchovh    false    217            e           2606    17780    material material_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.material
    ADD CONSTRAINT material_pkey PRIMARY KEY (value);
 @   ALTER TABLE ONLY public.material DROP CONSTRAINT material_pkey;
       public            fanchovh    false    216            _           2606    17639    news news_pk 
   CONSTRAINT     O   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pk PRIMARY KEY (news_id);
 6   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pk;
       public            fanchovh    false    213            Y           2606    17618    packaging packaging_pk 
   CONSTRAINT     ^   ALTER TABLE ONLY public.packaging
    ADD CONSTRAINT packaging_pk PRIMARY KEY (packaging_id);
 @   ALTER TABLE ONLY public.packaging DROP CONSTRAINT packaging_pk;
       public            fanchovh    false    210            U           2606    17605    performance performance_pk 
   CONSTRAINT     d   ALTER TABLE ONLY public.performance
    ADD CONSTRAINT performance_pk PRIMARY KEY (performance_id);
 D   ALTER TABLE ONLY public.performance DROP CONSTRAINT performance_pk;
       public            fanchovh    false    208            Q           2606    17592    product product_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pk PRIMARY KEY (product_id);
 <   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pk;
       public            fanchovh    false    206            S           2606    17597    property property_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.property
    ADD CONSTRAINT property_pk PRIMARY KEY (property_id);
 >   ALTER TABLE ONLY public.property DROP CONSTRAINT property_pk;
       public            fanchovh    false    207            D           2606    17538    session session_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pk PRIMARY KEY (session_id);
 <   ALTER TABLE ONLY public.session DROP CONSTRAINT session_pk;
       public            fanchovh    false    200            K           2606    17565    status status_pk 
   CONSTRAINT     U   ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pk PRIMARY KEY (status_id);
 :   ALTER TABLE ONLY public.status DROP CONSTRAINT status_pk;
       public            fanchovh    false    203            c           2606    17755    transaction transaction_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (transaction_id);
 F   ALTER TABLE ONLY public.transaction DROP CONSTRAINT transaction_pkey;
       public            fanchovh    false    215            O           2606    17578    transporter transporter_pk 
   CONSTRAINT     d   ALTER TABLE ONLY public.transporter
    ADD CONSTRAINT transporter_pk PRIMARY KEY (transporter_id);
 D   ALTER TABLE ONLY public.transporter DROP CONSTRAINT transporter_pk;
       public            fanchovh    false    205            E           1259    17552    customer_index    INDEX     M   CREATE UNIQUE INDEX customer_index ON public.customer USING btree (user_id);
 "   DROP INDEX public.customer_index;
       public            fanchovh    false    201            n           2606    17690    product collection_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.product
    ADD CONSTRAINT collection_id_fk FOREIGN KEY (collection_id) REFERENCES public.collection(collection_id) NOT VALID;
 B   ALTER TABLE ONLY public.product DROP CONSTRAINT collection_id_fk;
       public          fanchovh    false    2903    209    206            k           2606    17749    invoice delivery_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT delivery_id_fk FOREIGN KEY (delivery_id) REFERENCES public.delivery(delivery_id) NOT VALID;
 @   ALTER TABLE ONLY public.invoice DROP CONSTRAINT delivery_id_fk;
       public          fanchovh    false    2909    212    202            h           2606    17655    invoice discount_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT discount_id_fk FOREIGN KEY (discount_id) REFERENCES public.discount(discount_id) NOT VALID;
 @   ALTER TABLE ONLY public.invoice DROP CONSTRAINT discount_id_fk;
       public          fanchovh    false    202    204    2893            o           2606    17695    product packaging_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.product
    ADD CONSTRAINT packaging_id_fk FOREIGN KEY (packaging_id) REFERENCES public.packaging(packaging_id) NOT VALID;
 A   ALTER TABLE ONLY public.product DROP CONSTRAINT packaging_id_fk;
       public          fanchovh    false    210    206    2905            m           2606    17685    product performance_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.product
    ADD CONSTRAINT performance_id_fk FOREIGN KEY (performance_id) REFERENCES public.performance(performance_id) NOT VALID;
 C   ALTER TABLE ONLY public.product DROP CONSTRAINT performance_id_fk;
       public          fanchovh    false    208    2901    206            q           2606    36574    item product_id_fk    FK CONSTRAINT     ~   ALTER TABLE ONLY public.item
    ADD CONSTRAINT product_id_fk FOREIGN KEY (product_id) REFERENCES public.product(product_id);
 <   ALTER TABLE ONLY public.item DROP CONSTRAINT product_id_fk;
       public          fanchovh    false    2897    217    206            p           2606    17700    product property_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.product
    ADD CONSTRAINT property_id_fk FOREIGN KEY (property_id) REFERENCES public.property(property_id) NOT VALID;
 @   ALTER TABLE ONLY public.product DROP CONSTRAINT property_id_fk;
       public          fanchovh    false    207    2899    206            j           2606    17665    invoice status_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT status_id_fk FOREIGN KEY (status_id) REFERENCES public.status(status_id) NOT VALID;
 >   ALTER TABLE ONLY public.invoice DROP CONSTRAINT status_id_fk;
       public          fanchovh    false    203    2891    202            l           2606    17756    invoice transaction_id    FK CONSTRAINT     ?   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT transaction_id FOREIGN KEY (transaction_id) REFERENCES public.transaction(transaction_id) NOT VALID;
 @   ALTER TABLE ONLY public.invoice DROP CONSTRAINT transaction_id;
       public          fanchovh    false    215    2915    202            i           2606    17660    invoice user_id_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.invoice
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES public.customer(user_id) NOT VALID;
 <   ALTER TABLE ONLY public.invoice DROP CONSTRAINT user_id_fk;
       public          fanchovh    false    2887    202    201                  x?????? ? ?      ?   ?   x?M?M?0?ׯ?x;w??(;??K?,?
??h??9??uc?$??L2e?"W???LE?GW??2U???O7M?Cc}w??j?`??????M???9?Ü?? ??3?R?D)j.~?(?h?S??_7????6M]W?*N<?8??a???i???ڄ1?զ5?      ?     x??Q?R?0<?_??Nf????@/??P??Hv?O?ߑ????p?Q?ݕ??a?3:??뭇C?ڢ#Կ0?05D՜h??G?T?1?M?]?sH??"<?l?QԚs??`???'?z?k{6??????popop?p???_??7?6gyN0????[?uILbAJ???Xx?????u.Id?K?Ĥ????&??9?rۈdÄ?`???????G?8KL?R???{??'g?p\!?=Gm??H?$?H?x?3"?n;N??
??R???0?նRJ}o??      ?     x????j?@??w??]W?X?X?򯃦m(?!i(???i?F1o????Մ&P????r?;?1??{.%Oo??"݂???k솶???_`Z?!;?;۲ɩ?zZ?@?(j ??8??٢4G^WW??ڨ?n%?tA?v\"?Z5???????g????O??P;??x,|???U?|6???xqP????}S???*??YA?i??+?z???t?C?W??hh?v?8?Nb??????,?,pUA[??b???֤??>?	dζm?L?G????p?=??#?~ ?g??          ?   x???1?0??9?7?*?)e??Tй?!YT)r?Cq.F[U??????}?DNh?W??<??P?{??l|G? ya????Ǡ$?nC????????A%?G?^qP?-?{?d?@???`0z_?}?ù??å`F??t??E?_pU?Ό]g?͔R?I?u	      ?   :   x?3?4?tu??7?4202?50?52?2?4?:???u,?(h?M?S0F??? c?      ?   8   x?3?4?4?4202?50?52r@???܂˜Ӓӄ3Ə?H?pZ?[p??qqq ?L?            x?3???45???432?4??????? !??           x???AN?@??p?w???K?Dі??&]?A??D?A??zw=k??эK]?????љ3b΄??5???ٴ{$????Iم:ͅ?D????}???T??5?iƛ??(:???*???#???x??A2=??4]?w?א?????H?s???Q??$<HI(?ǌ??K??܏/Br?/?(???Ì>???s?Ti?,z>q???c\????{U?l(???"J???#?8??<gC?,݌?v	c??EpC??p??g	?C?&??Z??v?ζ,? ????            x?????? ? ?      ?   a   x??N??0{?(yT????A2~Q/?Q?-lGr??ք??I?? 4+?Jܹ?rh?.2?!ڸ??Pa?N1??<???*??*Ѿ??????I?/?| [R%?      ?   r   x?3??IUH?I,.?,,M?4401?4251?tA,?*.#N?????̂???<???b??Ԣ????ļ??b?.?. ?˘?'?8??h?01??2&8eLqʘᔉ???? ??0?      ?   ^   x?3??4???O???5?4?ମ?t?,.???L?I?ɚq?p??q????pZXp"?2?4B?*s$UA?T?U? ?J5?444?PgT???? >(C      ?   t   x?3?440 aNSNS if?i?ib?ii?Y???ǙX?\????b?g`h?cjT??i?e?lTj&?z̀l?4΂?҂???"L?@??`? ???Ղ|'?r??qqq S25t      ?   ?   x?E???0 g?on?Yk7&?Ec$.???@Z?0?'/7]r?t/??!?#+Va{?p?x??|???3\?O?[?AN?k?S]???,E??????:???zY??Pny?߉
(41?g?}@֪?B?b?,+?g?H	!_??+?      ?   >   x?3?L?SH?/-*?21?R?L9]????2?K2??????J?K???ͱ???qqq [??         ?   x???1? ??|?.?$??????@?Q?R??w?c?U??nV???t7?h?a3xʕ?4??c??v
???`?R9?u??Ń???^?c??NUN?<???h?~(????b???Dk <?z=?j?xB| ?[b?      ?   J   x?3????4 ??f?F???FF?????F?>?eE????y
?E?%??%?1y ???99?ř??1y\1z\\\ |?     