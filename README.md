docker-start Neo4j:
docker run \
 --publish=7474:7474 --publish=7687:7687 \
 --volume=$HOME/neo4j/data:/data \
 neo4j

docker run \
 -p 7474:7474 -p 7687:7687 \
 -v $PWD/data:/data -v $PWD/plugins:/plugins \
 --name neo4j-apoc \
 -e NEO4J_apoc_export_file_enabled=true \
 -e NEO4J_apoc_import_file_enabled=true \
 -e NEO4J_apoc_import_file_use**neo4j**config=true \
 -e NEO4J_PLUGINS=\[\"apoc-extended\"\] \
 neo4j:{neo4j-version}
APOC
uuid 397
date 962
export to json EOF
random text 962
random nodes EOF
