/*
 *  Copyright 2022 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { cloneDeep } from 'lodash';
import { COMMON_UI_SCHEMA } from '../constants/Services.constant';
import { DatabaseServiceType } from '../generated/entity/services/databaseService';
import athenaConnection from '../jsons/connectionSchemas/connections/database/athenaConnection.json';
import azureSQLConnection from '../jsons/connectionSchemas/connections/database/azureSQLConnection.json';
import bigQueryConnection from '../jsons/connectionSchemas/connections/database/bigQueryConnection.json';
import clickhouseConnection from '../jsons/connectionSchemas/connections/database/clickhouseConnection.json';
import couchbaseConnection from '../jsons/connectionSchemas/connections/database/couchbaseConnection.json';
import customDatabaseConnection from '../jsons/connectionSchemas/connections/database/customDatabaseConnection.json';
import databricksConnection from '../jsons/connectionSchemas/connections/database/databricksConnection.json';
import DatalakeConnection from '../jsons/connectionSchemas/connections/database/datalakeConnection.json';
import db2Connection from '../jsons/connectionSchemas/connections/database/db2Connection.json';
import deltaLakeConnection from '../jsons/connectionSchemas/connections/database/deltaLakeConnection.json';
import domoDatabaseConnection from '../jsons/connectionSchemas/connections/database/domoDatabaseConnection.json';
import dorisConnection from '../jsons/connectionSchemas/connections/database/dorisConnection.json';
import druidConnection from '../jsons/connectionSchemas/connections/database/druidConnection.json';
import dynamoDBConnection from '../jsons/connectionSchemas/connections/database/dynamoDBConnection.json';
import glueConnection from '../jsons/connectionSchemas/connections/database/glueConnection.json';
import greenplumConnection from '../jsons/connectionSchemas/connections/database/greenplumConnection.json';
import hiveConnection from '../jsons/connectionSchemas/connections/database/hiveConnection.json';
import impalaConnection from '../jsons/connectionSchemas/connections/database/impalaConnection.json';
import mariaDBConnection from '../jsons/connectionSchemas/connections/database/mariaDBConnection.json';
import mongoDBConnection from '../jsons/connectionSchemas/connections/database/mongoDBConnection.json';
import mssqlConnection from '../jsons/connectionSchemas/connections/database/mssqlConnection.json';
import mysqlConnection from '../jsons/connectionSchemas/connections/database/mysqlConnection.json';
import oracleConnection from '../jsons/connectionSchemas/connections/database/oracleConnection.json';
import pinotConnection from '../jsons/connectionSchemas/connections/database/pinotDBConnection.json';
import postgresConnection from '../jsons/connectionSchemas/connections/database/postgresConnection.json';
import prestoConnection from '../jsons/connectionSchemas/connections/database/prestoConnection.json';
import redshiftConnection from '../jsons/connectionSchemas/connections/database/redshiftConnection.json';
import salesforceConnection from '../jsons/connectionSchemas/connections/database/salesforceConnection.json';
import sapHanaConnection from '../jsons/connectionSchemas/connections/database/sapHanaConnection.json';
import singleStoreConnection from '../jsons/connectionSchemas/connections/database/singleStoreConnection.json';
import snowflakeConnection from '../jsons/connectionSchemas/connections/database/snowflakeConnection.json';
import sqliteConnection from '../jsons/connectionSchemas/connections/database/sqliteConnection.json';
import trinoConnection from '../jsons/connectionSchemas/connections/database/trinoConnection.json';
import unityCatalogConnection from '../jsons/connectionSchemas/connections/database/unityCatalogConnection.json';
import verticaConnection from '../jsons/connectionSchemas/connections/database/verticaConnection.json';

export const getDatabaseConfig = (type: DatabaseServiceType) => {
  let schema = {};
  const uiSchema = { ...COMMON_UI_SCHEMA };
  switch (type as unknown as DatabaseServiceType) {
    case DatabaseServiceType.Athena: {
      schema = athenaConnection;

      break;
    }
    case DatabaseServiceType.AzureSQL: {
      schema = azureSQLConnection;

      break;
    }
    case DatabaseServiceType.BigQuery: {
      schema = bigQueryConnection;

      break;
    }
    case DatabaseServiceType.Clickhouse: {
      schema = clickhouseConnection;

      break;
    }
    case DatabaseServiceType.Databricks: {
      schema = databricksConnection;

      break;
    }
    case DatabaseServiceType.Datalake: {
      schema = DatalakeConnection;

      break;
    }
    case DatabaseServiceType.Db2: {
      schema = db2Connection;

      break;
    }
    case DatabaseServiceType.DeltaLake: {
      schema = deltaLakeConnection;

      break;
    }
    case DatabaseServiceType.Doris: {
      schema = dorisConnection;

      break;
    }
    case DatabaseServiceType.Druid: {
      schema = druidConnection;

      break;
    }

    case DatabaseServiceType.DynamoDB: {
      schema = dynamoDBConnection;

      break;
    }
    case DatabaseServiceType.Glue: {
      schema = glueConnection;

      break;
    }
    case DatabaseServiceType.Hive: {
      schema = hiveConnection;

      break;
    }
    case DatabaseServiceType.Impala: {
      schema = impalaConnection;

      break;
    }
    case DatabaseServiceType.MariaDB: {
      schema = mariaDBConnection;

      break;
    }
    case DatabaseServiceType.Mssql: {
      schema = mssqlConnection;

      break;
    }
    case DatabaseServiceType.Mysql: {
      schema = mysqlConnection;

      break;
    }
    case DatabaseServiceType.Oracle: {
      schema = oracleConnection;

      break;
    }
    case DatabaseServiceType.Postgres: {
      schema = postgresConnection;

      break;
    }
    case DatabaseServiceType.Presto: {
      schema = prestoConnection;

      break;
    }
    case DatabaseServiceType.Redshift: {
      schema = redshiftConnection;

      break;
    }
    case DatabaseServiceType.Salesforce: {
      schema = salesforceConnection;

      break;
    }
    case DatabaseServiceType.SingleStore: {
      schema = singleStoreConnection;

      break;
    }
    case DatabaseServiceType.Snowflake: {
      schema = snowflakeConnection;

      break;
    }
    case DatabaseServiceType.SQLite: {
      schema = sqliteConnection;

      break;
    }
    case DatabaseServiceType.Trino: {
      schema = trinoConnection;

      break;
    }
    case DatabaseServiceType.Vertica: {
      schema = verticaConnection;

      break;
    }
    case DatabaseServiceType.CustomDatabase: {
      schema = customDatabaseConnection;

      break;
    }
    case DatabaseServiceType.DomoDatabase: {
      schema = domoDatabaseConnection;

      break;
    }
    case DatabaseServiceType.SapHana: {
      schema = sapHanaConnection;

      break;
    }
    case DatabaseServiceType.MongoDB: {
      schema = mongoDBConnection;

      break;
    }
    case DatabaseServiceType.Couchbase: {
      schema = couchbaseConnection;

      break;
    }
    case DatabaseServiceType.PinotDB: {
      schema = pinotConnection;

      break;
    }
    case DatabaseServiceType.Greenplum: {
      schema = greenplumConnection;

      break;
    }
    case DatabaseServiceType.UnityCatalog: {
      schema = unityCatalogConnection;

      break;
    }
    default: {
      schema = {};

      break;
    }
  }

  return cloneDeep({ schema, uiSchema });
};
