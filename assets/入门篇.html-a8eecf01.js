const e=JSON.parse('{"key":"v-cfed74d4","path":"/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/%E5%9F%BA%E7%A1%80%E7%AF%87/%E5%85%A5%E9%97%A8%E7%AF%87.html","title":"入门篇","lang":"zh-CN","frontmatter":{"description":"入门篇 Redis是一种键值型的NoSql数据库，这里有两个关键字： 键值型 NoSql 其中键值型，是指Redis中存储的数据都是以key、value对的形式存储，而value的形式多种多样，可以是字符串、数值、甚至json。 而NoSql则是相对于传统关系型数据库而言，有很大差异的一种数据库。 1.认识NoSQL NoSql可以翻译做Not Only Sql（不仅仅是SQL），或者是No Sql（非Sql的）数据库。是相对于传统关系型数据库而言，有很大差异的一种特殊的数据库，因此也称之为非关系型数据库。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/%E5%9F%BA%E7%A1%80%E7%AF%87/%E5%85%A5%E9%97%A8%E7%AF%87.html"}],["meta",{"property":"og:site_name","content":"帥的博客"}],["meta",{"property":"og:title","content":"入门篇"}],["meta",{"property":"og:description","content":"入门篇 Redis是一种键值型的NoSql数据库，这里有两个关键字： 键值型 NoSql 其中键值型，是指Redis中存储的数据都是以key、value对的形式存储，而value的形式多种多样，可以是字符串、数值、甚至json。 而NoSql则是相对于传统关系型数据库而言，有很大差异的一种数据库。 1.认识NoSQL NoSql可以翻译做Not Only Sql（不仅仅是SQL），或者是No Sql（非Sql的）数据库。是相对于传统关系型数据库而言，有很大差异的一种特殊的数据库，因此也称之为非关系型数据库。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-24T09:31:55.000Z"}],["meta",{"property":"article:author","content":"Mr.Shuai"}],["meta",{"property":"article:modified_time","content":"2023-11-24T09:31:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"入门篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-24T09:31:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Shuai\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.认识NoSQL","slug":"_1-认识nosql","link":"#_1-认识nosql","children":[{"level":3,"title":"1.1结构化与非结构化","slug":"_1-1结构化与非结构化","link":"#_1-1结构化与非结构化","children":[]},{"level":3,"title":"1.2.关联和非关联","slug":"_1-2-关联和非关联","link":"#_1-2-关联和非关联","children":[]},{"level":3,"title":"1.3.查询方式","slug":"_1-3-查询方式","link":"#_1-3-查询方式","children":[]},{"level":3,"title":"1.4.事务","slug":"_1-4-事务","link":"#_1-4-事务","children":[]},{"level":3,"title":"1.5.总结","slug":"_1-5-总结","link":"#_1-5-总结","children":[]}]},{"level":2,"title":"2.认识Redis","slug":"_2-认识redis","link":"#_2-认识redis","children":[]},{"level":2,"title":"3.安装Redis","slug":"_3-安装redis","link":"#_3-安装redis","children":[{"level":3,"title":"3.1.依赖库","slug":"_3-1-依赖库","link":"#_3-1-依赖库","children":[]},{"level":3,"title":"3.2.上传安装包并解压","slug":"_3-2-上传安装包并解压","link":"#_3-2-上传安装包并解压","children":[]},{"level":3,"title":"3.3.启动","slug":"_3-3-启动","link":"#_3-3-启动","children":[]},{"level":3,"title":"3.4.默认启动","slug":"_3-4-默认启动","link":"#_3-4-默认启动","children":[]},{"level":3,"title":"3.5.指定配置启动","slug":"_3-5-指定配置启动","link":"#_3-5-指定配置启动","children":[]},{"level":3,"title":"3.6.开机自启","slug":"_3-6-开机自启","link":"#_3-6-开机自启","children":[]}]},{"level":2,"title":"4.Redis桌面客户端","slug":"_4-redis桌面客户端","link":"#_4-redis桌面客户端","children":[{"level":3,"title":"4.1.Redis命令行客户端","slug":"_4-1-redis命令行客户端","link":"#_4-1-redis命令行客户端","children":[]},{"level":3,"title":"4.2.图形化桌面客户端","slug":"_4-2-图形化桌面客户端","link":"#_4-2-图形化桌面客户端","children":[]},{"level":3,"title":"4.3.安装","slug":"_4-3-安装","link":"#_4-3-安装","children":[]},{"level":3,"title":"4.4.建立连接","slug":"_4-4-建立连接","link":"#_4-4-建立连接","children":[]}]},{"level":2,"title":"5.Redis常见命令","slug":"_5-redis常见命令","link":"#_5-redis常见命令","children":[{"level":3,"title":"5.1.Redis通用命令","slug":"_5-1-redis通用命令","link":"#_5-1-redis通用命令","children":[]},{"level":3,"title":"5.2.String类型","slug":"_5-2-string类型","link":"#_5-2-string类型","children":[]},{"level":3,"title":"5.3.Hash类型","slug":"_5-3-hash类型","link":"#_5-3-hash类型","children":[]},{"level":3,"title":"5.4.List类型","slug":"_5-4-list类型","link":"#_5-4-list类型","children":[]},{"level":3,"title":"5.5.Set类型","slug":"_5-5-set类型","link":"#_5-5-set类型","children":[]},{"level":3,"title":"5.6.SortedSet类型","slug":"_5-6-sortedset类型","link":"#_5-6-sortedset类型","children":[]}]},{"level":2,"title":"6.Redis的Java客户端","slug":"_6-redis的java客户端","link":"#_6-redis的java客户端","children":[{"level":3,"title":"6.1.Jedis客户端","slug":"_6-1-jedis客户端","link":"#_6-1-jedis客户端","children":[]},{"level":3,"title":"6.2.SpringDataRedis客户端","slug":"_6-2-springdataredis客户端","link":"#_6-2-springdataredis客户端","children":[]}]}],"git":{"createdTime":1700816717000,"updatedTime":1700818315000,"contributors":[{"name":"帅博文","email":"1914252920@qq.com","commits":2}]},"readingTime":{"minutes":26.81,"words":8043},"filePathRelative":"数据库/Redis/基础篇/入门篇.md","localizedDate":"2023年11月24日","excerpt":"<h1> 入门篇</h1>\\n<p>Redis是一种键值型的NoSql数据库，这里有两个关键字：</p>\\n<ul>\\n<li>\\n<p>键值型</p>\\n</li>\\n<li>\\n<p>NoSql</p>\\n</li>\\n</ul>\\n<p>其中<strong>键值型</strong>，是指Redis中存储的数据都是以key、value对的形式存储，而value的形式多种多样，可以是字符串、数值、甚至json。</p>\\n<p>而NoSql则是相对于传统关系型数据库而言，有很大差异的一种数据库。</p>\\n<h2> 1.认识NoSQL</h2>\\n<p><strong>NoSql</strong>可以翻译做Not Only Sql（不仅仅是SQL），或者是No Sql（非Sql的）数据库。是相对于传统关系型数据库而言，有很大差异的一种特殊的数据库，因此也称之为<strong>非关系型数据库</strong>。</p>","autoDesc":true}');export{e as data};
