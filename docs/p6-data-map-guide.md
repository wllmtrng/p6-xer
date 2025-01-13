# About XER Import/Export Data Map Guide (Project) Version 20

Derived from [Primavera P6 EPPM XER Import/Export Data Map Guide (Project) Version 20](https://docs.oracle.com/cd/F25600_01/English/Mapping_and_Schema/xer_import_export_data_map_project/helpmain.htm?toc.htm?97788.htm).

This guide details how data is mapped between P6 EPPM and XER format when you export Projects. Throughout this guide, the term P6 EPPM includes P6 Professional. Any content that applies to only one of these applications is labeled accordingly.
All users who want to exchange data between various formats should use this document.
Caution: Personal information (PI) may be at risk of exposure. Depending on local data protection laws organizations may be responsible for mitigating any risk of exposure.

---

# ACCOUNT - (Cost Accounts)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| acct_descr | Cost Account Description |
| acct_id | Unique ID |
| acct_seq_num | Sort Order |
| acct_name | Cost Account Name |
| acct_short_name | Cost Account ID |
| parent_acct_id | Parent Cost Account |



---

# ACTVCODE - (Activity Code Values)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| actv_code_id | Unique ID |
| actv_code_name | Description |
| actv_code_type_id | Activity Code |
| color | Color (P6 EPPM only) |
| parent_actv_code_id | Parent Activity Code Value |
| seq_num | Sort Order |
| short_name | Activity Code Value |



---

# ACTVTYPE - (Activity Codes)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| actv_code_type | Activity Code |
| actv_code_type_id | Unique ID |
| actv_code_type_scope | Activity Code Type Scope |
| actv_short_len | Max Code Length |
| proj_id | EPS/Project |
| seq_num | Sort Order |
| super_flag | Secure Code |



---

# APPLYACTOPTIONS - (Apply Actual Options)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| proj_id | Project |
| respect_duration_type | respect_duration_type |



---

# ASGNMNTACAT - (Assignment Code Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| asgnmnt_catg_id | Assignment Code Value |
| asgnmnt_catg_type_id | Assignment Code |
| taskrsrc_id | Activity Resource/Role Assignment |
| proj_id | Project |



---

# ASGNMNTCATTYPE - (Assignment Codes)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| asgnmnt_catg_type_id | Unique Id |
| asgnmnt_catg_type | Assignment Code |
| asgnmnt_catg_short_len | Max Code Length |
| seq_num | Sort Order |
| super_flag | Secure Code |



---

# ASGNMNTCATVAL - (Assignment Code Values)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| asgnmnt_catg_id | Unique Id |
| asgnmnt_catg_type_id | Assignment Code |
| parent_asgnmnt_catg_id | Parent Code Value Id |
| asgnmnt_catg_short_name | Assignment Code Value |
| seq_num | Sort Order |
| asgnmnt_catg_name | Code Description |



---

# BUDGCHNG - (Budget Changes)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| budg_chng_id | Unique ID |
| chng_by_name | Responsible |
| chng_cost | Amount |
| chng_date | Date |
| chng_descr | Reason |
| chng_short_name | Change Number |
| proj_id | Project |
| status_code | Status |
| wbs_id | WBS |



---

# CALENDAR - (Calendars)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| base_clndr_id | Parent Calendar |
| clndr_data | Data |
| clndr_id | Unique ID |
| clndr_name | Calendar Name |
| clndr_type | Calendar Type |
| day_hr_cnt | Work Hours Per Day |
| default_flag | Default |
| last_chng_date | Date Last Changed |
| month_hr_cnt | Work Hours Per Month |
| proj_id | Project |
| rsrc_private | Personal Calendar (P6 EPPM only) |
| week_hr_cnt | Work Hours Per Week |
| year_hr_cnt | Work Hours Per Year |



---

# COSTTYPE - (Expense Categories)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| cost_type | Expense Category |
| cost_type_id | Unique ID |
| seq_num | Sort Order |



---

# CURRTYPE - (Currency Types)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| base_exch_rate | Exchange Rate |
| curr_id | Unique ID |
| curr_short_name | Currency ID |
| curr_symbol | Currency Symbol |
| curr_type | Currency Name |
| decimal_digit_cnt | Number of Digits after Decimal |
| decimal_symbol | Decimal Symbol |
| digit_group_symbol | Digit Grouping Symbol |
| group_digit_cnt | Currency Group Digit Count |
| neg_curr_fmt_type | Negative Currency Format |
| pos_curr_fmt_type | Positive Currency Format |



---

# DOCCATG - (Document Categories)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| doc_catg_id | Unique ID |
| doc_catg_name | Category |
| seq_num | Sort Order |



---

# DOCSTAT - (Document Statuses)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| doc_status_code | Status Code |
| doc_status_id | Unique ID |
| seq_num | Sort Order |



---

# DOCUMENT - (Work Products and Documents)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| author_name | Author |
| cr_external_doc_key | External Document Key |
| deliv_flag | Deliverable |
| doc_catg_id | Document Category |
| doc_content | Description |
| doc_date | Revision Date |
| doc_id | Unique ID |
| doc_mgmt_type | Document Management Type |
| doc_name | Title |
| doc_seq_num | Sort Order |
| doc_short_name | Reference No. |
| doc_status_id | Status |
| guid | Global Unique ID |
| parent_doc_id | Parent Document |
| private_loc | Private Location |
| proj_id | Project |
| public_loc | Public Location |
| tmpl_guid | Methodology Global Unique ID |
| version_name | Version |



---

# FINDATES - (Financial Periods)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| end_date | End Date |
| fin_dates_id | Unique ID |
| fin_dates_name | Period Name |
| start_date | Start Date |



---

# FUNDSRC - (Funding Sources)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| fund_descr | Description |
| fund_id | Unique ID |
| fund_name | Funding Source |
| parent_fund_id | Parent Funding Source |
| seq_num | Sort Order |



---

# ISSUHIST - (Notification History)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| issue_history | Notification History |
| issue_id | Issue |
| proj_id | Project |



---

# MEMOTYPE - (Notebook Topics)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| eps_flag | Available for EPS |
| memo_type | Notebook Topic |
| memo_type_id | Unique ID |
| proj_flag | Available for Projects |
| seq_num | Sort Order |
| task_flag | Available for Activity |
| wbs_flag | Available for WBS |



---

# OBS - (OBS)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| guid | Global Unique ID |
| obs_descr | OBS Description |
| obs_id | Unique ID |
| obs_name | OBS Name |
| parent_obs_id | Parent OBS |
| seq_num | Sort Order |



---

# PCATTYPE - (Project Codes)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| max_proj_catg_wt | Max Code Value Weight (P6 Professional only) |
| proj_catg_short_len | Max Code Length |
| proj_catg_type | Project Code |
| proj_catg_type_id | Unique ID |
| proj_catg_type_wt | Weight (P6 Professional only) |
| seq_num | Sort Order |
| super_flag | Secure Code |



---

# PCATVAL - (Project Code Values)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| parent_proj_catg_id | Parent Code |
| proj_catg_id | Unique ID |
| proj_catg_name | Code Description |
| proj_catg_short_name | Project Code Value |
| proj_catg_type_id | Project Code |
| proj_catg_wt | Weight (P6 Professional only) |
| seq_num | Sort Order |



---

# PHASE

Note: The PHASE table holds data which is visible in the Current Phase project code in P6 EPPM or the WBS Category column in P6 Professional.

| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| phase_id | Unique ID |
| phase_name | Category Value |
| seq_num | Sort Order |



---

# PROJCOST - (Project Expenses)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| acct_id | Cost Account |
| act_cost | Actual Cost |
| auto_compute_act_flag | Auto Compute Actuals |
| cost_descr | Expense Description |
| cost_item_id | Unique ID |
| cost_load_type | Accrual Type |
| cost_name | Expense Item |
| cost_per_qty | Price / Unit |
| cost_type_id | Expense Category |
| po_number | Document Number |
| proj_id | Project |
| qty_name | Unit of Measure |
| remain_cost | Remaining Cost |
| target_cost | Budgeted/Planned Cost |
| target_qty | Budgeted/Planned Units |
| task_id | Activity Name |
| vendor_name | Vendor |



---

# PROJECT - (Projects)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| acct_id | Default Cost Account |
| act_pct_link_flag | Link Percent Complete With Actual |
| act_this_per_link_flag | Link actual to date and actual this period units and costs |
| add_act_remain_flag | Add Actual To Remain |
| add_by_name | Added By |
| add_date | Date Added |
| allow_complete_flag | Can resources mark activities completed |
| allow_neg_act_flag | Allow Negative Actual Units |
| apply_actuals_date | Last Apply Actuals Date |
| base_type_id | Baseline Type |
| batch_sum_flag | Enable Summarization |
| checkout_date | Date Checked Out |
| checkout_flag | Project Check-out Status |
| checkout_user_id | Checked Out By |
| chng_eff_cmp_pct_flag | Resources Edit Percent Complete (P6 Professional only) |
| clndr_id | Default Calendar |
| control_updates_flag | Status Update Control |
| cost_qty_recalc_flag | Cost Qty Recalc Flag |
| cr_external_key | Content Repository External UUID |
| critical_drtn_hr_cnt | Critical activities have float less than or equal to |
| critical_path_type | critical_path_type |
| def_complete_pct_type | Default Percent Complete Type |
| def_cost_per_qty | Default Price / Unit |
| def_duration_type | Default Duration Type |
| def_qty_type | Default Price Time Units |
| def_rate_type | Rate Type |
| def_rollup_dates_flag | Drive Activity Dates Default |
| def_task_type | Default Activity Type |
| fcst_start_date | Project Forecast Start |
| fintmpl_id | Financial Period Calendar ID |
| fy_start_month_num | Fiscal Year Begins |
| guid | Global Unique ID |
| hist_interval | History Interval |
| hist_level | History Level |
| intg_proj_type | Integrated Project (P6 Professional only) |
| last_baseline_update_date | Last Update Date |
| last_checksum | Last Checksum |
| last_fin_dates_id | Financial Period |
| last_level_date | Last Leveled Date ( only) |
| last_recalc_date | Last Recalc Date P6 EPPM |
| last_schedule_date | Last Scheduled Date (P6 EPPM only) |
| last_tasksum_date | Last Summarized Date |
| location_id | Project Location |
| msp_managed_flag | MS Project Managed Flag (P6 Professional only) |
| name_sep_char | Code Separator |
| orig_proj_id | Original Project |
| plan_end_date | Must Finish By |
| plan_start_date | Planned Start |
| priority_num | Project Leveling Priority |
| proj_id | Unique ID |
| proj_short_name | Project ID |
| proj_url | Project Web Site URL |
| project_flag | Project Flag |
| px_enable_publication_flag | Enable Publication ( only) |
| px_last_update_date | Last time Publish Project was run on this project (P6 Professional only) |
| px_priority | Publication Priority (P6 EPPM only) |
| rem_target_link_flag | Link Budget and At Completion |
| reset_planned_flag | Reset Original to Remaining |
| risk_level | Risk Level (P6 Professional only) |
| rsrc_multi_assign_flag | Can assign resource multiple times to activity |
| rsrc_self_add_flag | Can resources assign selves to activities |
| scd_end_date | Schedule Finish |
| source_proj_id | Source Project |
| step_complete_flag | Physical Percent Complete uses Steps Completed |
| strgy_priority_num | Strategic Priority |
| sum_assign_level | sum_assign_level |
| sum_base_proj_id | Project Baseline |
| sum_data_date | Summarized Data Date (P6 Professional only) |
| sum_only_flag | Contains Summarized Data Only (P6 Professional only) |
| task_code_base | Activity ID Suffix |
| task_code_prefix | Activity ID Prefix |
| task_code_prefix_flag | Activity ID based on selected activity |
| task_code_step | Activity ID Increment |
| ts_rsrc_vs_inact_actv_flag | Resource can view activities from an inactive project (P6 Professional only) |
| use_project_baseline_flag | use_project_baseline_flag |
| wbs_max_sum_level | WBS Max Summarization Level |
| web_local_root_path | Web Site Root Directory |



---

# PROJEST - (Estimate History)

Note: This table is available in P6 Professional only.

| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| adj_mult_pct | Adjustment Factor |
| applied_flag | Applied |
| bu_cmplx_value | Size/Complexity |
| est_date | Date |
| est_name | Estimate Name |
| est_notes | Assumptions & Notes |
| est_qty | Estimated Units |
| est_task_cnt | Total Activities |
| est_type | Method |
| fp_cmplx_value | Total Degree of Influence |
| fp_cnt | Final Adjusted FP Count |
| fp_prod_avg_value | FP/Person-Month |
| fp_unadj_cnt | Unadjusted FP Count |
| proj_est_id | Unique ID |
| proj_id | Project |
| rsrc_id | Resource |
| rsrc_type | Resource Type |
| wbs_id | WBS |



---

# PROJFUND - (Project Funding Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| fund_cost | Amount |
| fund_id | Funding Source |
| fund_wt | Fund Share |
| proj_fund_id | Unique ID |
| proj_id | Project |



---

# PROJISSU - (Issues)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| add_by_name | Identified By |
| add_date | Date Identified |
| base_proj_id | Base Project |
| hi_parm_value | Upper Threshold |
| issue_id | Unique ID |
| issue_name | Issue |
| issue_notes | Issue Notes |
| issue_value | Actual Value |
| lo_parm_value | Lower Threshold |
| obs_id | Responsible Manager |
| priority_type | Priority |
| proj_id | Project |
| resolv_date | Resolution Date |
| rsrc_id | Resource |
| status_code | Status |
| task_id | Activity |
| thresh_id | Threshold |
| thresh_parm_id | Threshold Parameter |
| track_view_id | Tracking Layout |
| wbs_id | WBS |



---

# PROJPCAT - (Project Code Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| proj_catg_id | Code Value |
| proj_catg_type_id | Project Code |
| proj_id | Project |



---

# PROJTHRS - (Thresholds)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| hi_parm_value | Upper Threshold |
| lo_parm_value | Lower Threshold |
| obs_id | Responsible Manager |
| priority_type | Priority |
| proj_id | Project |
| status_code | Status |
| thresh_id | Unique ID |
| thresh_parm_id | Threshold Parameter |
| thresh_type | Detail To Monitor |
| track_view_id | Tracking Layout |
| wbs_id | WBS |
| window_end | To Date |
| window_start | From Date |



---

# PROJWBS - (WBS)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| ann_dscnt_rate_pct | Annual Discount Rate |
| anticip_end_date | Anticipated Finish |
| anticip_start_date | Anticipated Start |
| dscnt_period_type | Discount Application Period |
| est_wt | Est Weight (P6 Professional only) |
| ev_compute_type | Earned Value Percent Complete Technique |
| ev_etc_compute_type | Earned Value Estimate-to-Complete Technique |
| ev_etc_user_value | Earned Value Performance Factor |
| ev_user_pct | Earned Value Percent Complete |
| guid | Global Unique ID |
| indep_remain_total_cost | Independent ETC Total Cost |
| indep_remain_work_qty | Independent ETC Labor Units |
| obs_id | Responsible Manager |
| orig_cost | Original Budget |
| parent_wbs_id | Parent WBS |
| phase_id | WBS Category |
| proj_id | Project |
| proj_node_flag | Project Node |
| seq_num | Sort Order |
| status_code | Project Status |
| status_reviewer | User Reviewing Status |
| sum_data_flag | Contains Summary Data |
| tmpl_guid | Methodology Global Unique ID |
| wbs_id | Unique ID |
| wbs_name | WBS Name |
| wbs_short_name | WBS Code |



---

# PRORISK - (Risks)

Note: This table is available in P6 Professional only.

| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| add_date | Identified On |
| identified_by_id | Identified By |
| notes | Notes |
| post_rsp_cost_prblty | Post-Response Cost |
| post_rsp_prblty | Post-Response Probability |
| post_rsp_schd_prblty | Post-Response Schedule |
| pre_rsp_cost_prblty | Pre-Response Cost |
| pre_rsp_prblty | Pre-Response Probability |
| pre_rsp_schd_prblty | Pre-Response Schedule |
| proj_id | Project ID |
| response_text | Response Description |
| response_type | Response Type |
| risk_cause | Risk Cause |
| risk_code | Risk ID |
| risk_desc | Risk Description |
| risk_effect | Risk Effect |
| risk_id | Unique ID |
| risk_name | Risk Name |
| risk_to_type | Risk Type |
| risk_type_id | Risk Category ID |
| rsrc_id | Risk Owner |
| status_code | Risk Status |



---

# RCATTYPE - (Resource Codes)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| rsrc_catg_short_len | Max Code Length |
| rsrc_catg_type | Resource Code |
| rsrc_catg_type_id | Unique ID |
| seq_num | Sort Order |
| super_flag | Secure Code |



---

# RCATVAL - (Resource Code Values)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| parent_rsrc_catg_id | Parent Code |
| rsrc_catg_id | Unique ID |
| rsrc_catg_name | Code Description |
| rsrc_catg_short_name | Resource Code |
| rsrc_catg_type_id | Resource Code |
| seq_num | Sort Order |



---

# RISKTYPE - (Risk Types)

Note: This table is available in P6 Professional only.

| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| parent_risk_type_id | Parent Risk Category ID |
| risk_type | Risk Category |
| risk_type_id | Unique ID |
| seq_num | Sort Order |



---

# ROLECATTYPE - (Role Codes)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| role_catg_short_len | Max Code Length |
| role_catg_type | Role Code |
| role_catg_type_id | Unique ID |
| seq_num | Sort Order |
| super_flag | Secure Code |



---

# ROLECATVAL - (Role Code Values)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| parent_role_catg_id | Parent Code |
| role_catg_id | Unique ID |
| role_catg_name | Code Description |
| role_catg_short_name | Role Code Name |
| role_catg_type_id | Role Code ID |
| seq_num | Sort Order |



---

# ROLELIMIT - (Role Limits)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| max_qty_per_hr | Max Units / Time |
| role_id | Role ID |
| rolelimit_id | Unique ID |
| start_date | Effective Date |



---

# ROLERATE - (Role Prices)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| cost_per_qty | Standard Rate (P6 EPPM)
Price/Unit1 (P6 Professional) |
| cost_per_qty2 | Internal Rate (P6 EPPM)
Price/Unit2 (P6 Professional) |
| cost_per_qty3 | External Rate (P6 EPPM)
Price/Unit3 (P6 Professional) |
| cost_per_qty4 | Price/Unit4 |
| cost_per_qty5 | Price/Unit5 |
| max_qty_per_hr | Max Units / Time |
| role_id | Role ID |
| role_rate_id | Unique ID |
| start_date | Effective Date |



---

# ROLERCAT - (Role Code Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| role_catg_id | Code Value |
| role_catg_type_id | Role Code ID |
| role_id | Role ID |



---

# ROLES - (Roles)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| cost_qty_type | Price Time Units |
| def_cost_qty_link_flag | Calculate costs from units |
| parent_role_id | Parent Role |
| role_descr | Responsibilities |
| role_id | Unique ID |
| role_name | Role Name |
| role_short_name | Role ID |
| seq_num | Sort Order |



---

# RSRC - (Resources)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| active_flag | Active |
| auto_compute_act_flag | Auto Compute Actuals |
| clndr_id | Calendar |
| cost_qty_type | Price Time Units |
| curr_id | Currency Name |
| def_cost_qty_link_flag | Calculate costs from units |
| def_qty_per_hr | Default Units / Time |
| email_addr | Email Address |
| employee_code | Employee ID |
| guid | Global Unique ID |
| location_id | Resource Location |
| office_phone | Office Phone |
| ot_factor | Overtime Factor |
| ot_flag | Overtime Allowed |
| other_phone | Other Phone |
| parent_rsrc_id | Parent Resource |
| role_id | Primary Role |
| rsrc_id | Unique ID |
| rsrc_name | Resource Name |
| rsrc_notes | Resource Notes |
| rsrc_seq_num | Sort Order |
| rsrc_short_name | Resource ID |
| rsrc_title_name | Title |
| rsrc_type | Resource Type |
| shift_id | Shift |
| timesheet_flag | Uses timesheets |
| ts_approve_user_id | Timesheet Approval Manager |
| unit_id | Unit of Measure |
| user_id | User Login Name |
| xfer_complete_day_cnt | Not-Started Activities View Window (P6 Professional only) |
| xfer_notstart_day_cnt | Completed Activities View Window (P6 Professional only) |



---

# RSRCCURV - (Resource Curves)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| curv_data | Data |
| curv_id | Unique ID |
| curv_name | Resource Curve Name |
| default_flag | Default |



---

# RSRCCURVDATA - (Resource Curve Data)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| curv_id | Unique ID |
| curv_name | curv_name |
| default_flag | default_flag |
| pct_usage_0 | pct_usage_0 |
| pct_usage_1 | pct_usage_1 |
| pct_usage_2 | pct_usage_2 |
| pct_usage_3 | pct_usage_3 |
| pct_usage_4 | pct_usage_4 |
| pct_usage_5 | pct_usage_5 |
| pct_usage_6 | pct_usage_6 |
| pct_usage_7 | pct_usage_7 |
| pct_usage_8 | pct_usage_8 |
| pct_usage_9 | pct_usage_9 |
| pct_usage_10 | pct_usage_10 |
| pct_usage_11 | pct_usage_11 |
| pct_usage_12 | pct_usage_12 |
| pct_usage_13 | pct_usage_13 |
| pct_usage_14 | pct_usage_14 |
| pct_usage_15 | pct_usage_15 |
| pct_usage_16 | pct_usage_16 |
| pct_usage_17 | pct_usage_17 |
| pct_usage_18 | pct_usage_18 |
| pct_usage_19 | pct_usage_19 |
| pct_usage_20 | pct_usage_20 |



---

# RSRCLEVELLIST - (Resource Level List)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| rsrc_id | Resource |
| rsrc_level_list_id | Unique ID |
| schedoptions_id | SCHEDOPTIONS |



---

# RSRCRATE - (Resource Prices)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| cost_per_qty | Standard Rate (P6 EPPM)
Price/Unit1 (P6 Professional) |
| cost_per_qty2 | Internal Rate (P6 EPPM)
Price/Unit2 (P6 Professional) |
| cost_per_qty3 | External Rate (P6 EPPM)
Price/Unit1 (P6 Professional) |
| cost_per_qty4 | Price/Unit4 |
| cost_per_qty5 | Price/Unit5 |
| max_qty_per_hr | Max Units / Time |
| rsrc_id | Resource |
| rsrc_rate_id | Unique ID |
| shift_period_id | Shift |
| start_date | Effective Date |



---

# RSRCRCAT - (Resource Code Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| rsrc_catg_id | Code Value |
| rsrc_catg_type_id | Resource Code |
| rsrc_id | Resource |



---

# RSRCROLE - (Resource Role Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| role_id | Role |
| role_name | Role Name |
| role_short_name | Role ID |
| rsrc_id | Resource |
| rsrc_name | Resource Name |
| rsrc_role_id | Role |
| rsrc_short_name | Resource ID |
| rsrc_type | Resource Type |
| skill_level | Proficiency |



---

# SCHEDOPTIONS - (Schedule Options)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| enable_multiple_longest_path_calc | enable_multiple_longest_path_calc |
| key_activity_for_multiple_longest_paths | key_activity_for_multiple_longest_paths |
| level_all_rsrc_flag | level_all_rsrc_flag |
| level_float_thrs_cnt | level_float_thrs_cnt |
| level_keep_sched_date_flag | level_keep_sched_date_flag |
| level_outer_assign_flag | level_outer_assign_flag |
| level_outer_assign_priority | level_outer_assign_priority |
| level_over_alloc_pct | level_over_alloc_pct |
| level_within_float_flag | level_within_float_flag |
| LevelPriorityList | LevelPriorityList |
| limit_multiple_longest_path_calc | limit_multiple_longest_path_calc |
| max_multiple_longest_path | max_multiple_longest_path |
| proj_id | Project |
| sched_calendar_on_relationship_lag | sched_calendar_on_relationship_lag |
| sched_float_type | sched_float_type |
| sched_lag_early_start_flag | sched_lag_early_start_flag |
| sched_open_critical_flag | sched_open_critical_flag |
| sched_outer_depend_type | sched_outer_depend_type |
| sched_progress_override | sched_progress_override |
| sched_retained_logic | sched_retained_logic |
| sched_setplantoforecast | sched_setplantoforecast |
| sched_use_expect_end_flag | sched_use_expect_end_flag |
| sched_use_project_end_date_for_float | sched_use_project_end_date_for_float |
| schedoptions_id | Unique ID |
| use_total_float_multiple_longest_paths | use_total_float_multiple_longest_paths |



---

# SHIFT - (Shift Names)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| shift_id | Unique ID |
| shift_name | Shift Name |



---

# SHIFTPER - (Shifts)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| shift_id | Shift Name |
| shift_period_id | Unique ID |
| shift_start_hr_num | Shift start hour number |



---

# TASK - (Activities)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| act_end_date | Actual Finish |
| act_equip_qty | Actual Nonlabor Units |
| act_start_date | Actual Start |
| act_this_per_equip_qty | Actual This Period Nonlabor Units |
| act_this_per_work_qty | Actual This Period Labor Units |
| act_work_qty | Actual Labor Units |
| auto_compute_act_flag | Auto Compute Actuals |
| clndr_id | Calendar |
| complete_pct_type | Percent Complete Type |
| create_date | Added Date |
| create_user | Added By |
| cstr_date | Primary Constraint Date |
| cstr_date2 | Secondary Constraint Date |
| cstr_type | Primary Constraint |
| cstr_type2 | Secondary Constraint |
| driving_path_flag | Longest Path |
| duration_type | Duration Type |
| early_end_date | Early Finish |
| early_start_date | Early Start |
| est_wt | Est Weight (P6 Professional only) |
| expect_end_date | Expected Finish |
| external_early_start_date | External Early Start |
| external_late_end_date | External Late Finish |
| float_path | Float Path |
| float_path_order | Float Path Order |
| free_float_hr_cnt | Free Float |
| guid | Global Unique ID |
| late_end_date | Late Finish |
| late_start_date | Late Start |
| location_id | Activity Location |
| lock_plan_flag | Lock Remaining |
| phys_complete_pct |  |
| priority_type | Activity Leveling Priority |
| proj_id | Project |
| reend_date | Remaining Early Finish |
| rem_late_end_date | Remaining Late Finish |
| rem_late_start_date | Remaining Late Start |
| remain_drtn_hr_cnt | Remaining Duration |
| remain_equip_qty | Remaining Nonlabor Units |
| remain_work_qty | Remaining Labor Units |
| restart_date | Remaining Early Start |
| resume_date | Resume Date |
| rev_fdbk_flag | New Feedback |
| review_end_date | Review Finish (P6 Professional only) |
| review_type | Review Status (P6 Professional only) |
| rsrc_id | Primary Resource |
| status_code | Activity Status |
| suspend_date | Suspend Date |
| target_drtn_hr_cnt | Planned Duration (P6 EPPM)
Original or Planned Duration (P6 Professional) |
| target_end_date | Planned Finish |
| target_equip_qty | Planned Nonlabor Units (P6 EPPM)
Budgeted or Planned Nonlabor Units (P6 Professional) |
| target_start_date | Planned Start |
| target_work_qty | Planned Labor Units (P6 EPPM)
Budgeted or Planned Labor Units (P6 Professional) |
| task_code | Activity ID |
| task_id | Unique ID |
| task_name | Activity Name |
| task_type | Activity Type |
| tmpl_guid | Methodology Global Unique ID |
| total_float_hr_cnt | Total Float |
| update_date | Last Modified Date |
| update_user | Last Modified By |
| wbs_id | WBS |



---

# TASKACTV - (Activity Code Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| actv_code_id | Activity Code Value |
| actv_code_type_id | Activity Code |
| proj_id | Project |
| task_id | Activity |



---

# TASKDOC - (Document Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| doc_id | Document |
| proj_id | Project |
| task_id | Activity |
| taskdoc_id | Unique ID |
| wbs_id | WBS |
| wp_flag | Work Product |



---

# TASKFDBK - (Activity Feedback)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| proj_id | Project |
| task_fdbk | Feedback from Resources (P6 EPPM)
Feedback from Primary Resource (P6 Professional) |
| task_id | Activity |



---

# TASKFIN - (Activity Past Period Actuals)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| act_equip_cost | Actual Nonlabor Cost |
| act_equip_qty | Actual Nonlabor Units |
| act_expense_cost | Actual Expense Cost |
| act_mat_cost | Actual Material Cost |
| act_work_cost | Actual Labor Cost |
| act_work_qty | Actual Labor Units |
| bcwp | Earned Value Cost |
| bcws | Planned Value Cost |
| fin_dates_id | Financial Period |
| perfm_work_qty | Earned Value Labor Units |
| proj_id | Project |
| sched_work_qty | Planned Value Labor Units |
| task_id | Activity Name |



---

# TASKMEMO - (Activity Notebook)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| memo_id | Unique ID |
| memo_type_id | Notebook Topic |
| proj_id | Project |
| task_id | Activity |
| task_memo | Notebook Description |



---

# TASKNOTE - (Activity Notes to Resources)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| proj_id | Project |
| task_id | Activity |
| task_notes | Notes to Resources |



---

# TASKPRED - (Activity Relationships)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| comments | Comments |
| lag_hr_cnt | Lag |
| pred_proj_id | Predecessor Project |
| pred_task_id | Predecessor |
| pred_type | Relationship Type |
| proj_id | Successor Project |
| task_id | Successor |
| task_pred_id | Unique ID |



---

# TASKPROC - (Activity Steps)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| complete_flag | Completed |
| complete_pct | Step % Complete |
| proc_descr | Step Description |
| proc_id | Unique ID |
| proc_name | Step Name |
| proc_wt | Step Weight |
| proj_id | Project |
| seq_num | Sort Order |
| task_id | Activity |



---

# TASKRSRC - (Activity Resource Assignments)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| acct_id | Cost Account |
| act_end_date | Actual Finish |
| act_ot_cost | Actual Overtime Cost |
| act_ot_qty | Actual Overtime Units |
| act_reg_cost | Actual Regular Cost |
| act_reg_qty | Actual Regular Units |
| act_start_date | Actual Start |
| act_this_per_cost | Actual This Period Cost |
| act_this_per_qty | Actual This Period Units |
| actual_crv | Actual Units Profile |
| cost_per_qty | Price / Unit |
| cost_per_qty_source_type | Rate Source |
| cost_qty_link_flag | Calculate costs from units |
| create_date | Assigned Date |
| create_user | Assigned by |
| curv_id | Curve |
| guid | Global Unique ID |
| ot_factor | Overtime Factor |
| pend_act_ot_qty | Pend Actual Overtime Units (P6 Professional only) |
| pend_act_reg_qty | Pend Actual Regular Units (P6 Professional only) |
| pend_complete_pct | Pend % Complete (P6 Professional only) |
| pend_remain_qty | Pend Remaining Units (P6 Professional only) |
| prior_ts_act_of_qty | Prior Timesheet Actual Overtime Units (P6 Professional only) |
| prior_ts_act_reg_qty | Prior Timesheet Actual Regular Units (P6 Professional only) |
| proj_id | Project |
| rate_type | Rate Type |
| reend_date | Remaining Early Finish |
| relag_drtn_hr_cnt | Remaining Lag |
| rem_late_end_date | Remaining Late Finish |
| rem_late_start_date | Remaining Late Start |
| remain_cost | Remaining Early Cost |
| remain_crv | Remaining Units Profile |
| remain_qty | Remaining Early Units |
| remain_qty_per_hr | Remaining Units / Time |
| restart_date | Remaining Early Start |
| role_id | Role |
| rollup_dates_flag | Drive Activity Dates |
| rsrc_id | Resource ID Name |
| rsrc_type | Resource Type |
| skill_level | Proficiency |
| target_cost | Budgeted/Planned Cost |
| target_crv | Planned Units Profile |
| target_end_date | Planned Finish |
| target_lag_drtn_hr_cnt | Original Lag |
| target_qty | Budgeted/Planned Units |
| target_qty_per_hr | Budgeted/Planned Units / Time |
| target_start_date | Planned Start |
| task_id | Activity Name |
| TASKRSRC.TASK|wbs_id | EPS/WBS |
| taskrsrc_id | Unique ID |
| ts_pend_act_end_flag | Pending Actual End Date Flag |



---

# TASKUSER - (Activity Owners)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| proj_id | Project |
| task_id | Activity Name |
| user_id | Owner |



---

# THRSPARM - (Threshold Parameters)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| rsrc_flag | Applies to Resources |
| seq_num | Sort Order |
| task_flag | Applies to Activities |
| thresh_field_name | Threshold Field Name |
| thresh_parm_id | Unique ID |
| thresh_parm_name | Threshold Parameter |
| thresh_parm_type | Threshold Parameter Type |
| thresh_short_name | Threshold Name |
| wbs_flag | Applies to WBS |



---

# TRSRCFIN - (Activity Resource Assignment Past Period Actuals)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| act_cost | Actual Cost |
| act_qty | Actual Units |
| fin_dates_id | Financial Period |
| proj_id | Project |
| task_id | Activity Name |
| taskrsrc_id | Assignment ID |



---

# UDFTYPE - (User Defined Fields)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| indicator_expression | indicator_expression |
| logical_data_type | Data Type |
| summary_indicator_expression | summary_indicator_expression |
| super_flag | Secure Code |
| table_name | Table |
| udf_type_id | Unique ID |
| udf_type_label | Title |
| udf_type_name | User Defined Field |



---

# UDFVALUE - (User Defined Field Values)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| fk_id | Activity Step Item |
| proj_id | Project |
| udf_code_id | udf_code_id |
| udf_date | udf_date |
| udf_number | udf_number |
| udf_text | udf_text |
| udf_type_id | User Defined Field |



---

# UMEASURE - (Units of Measure)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| seq_num | Sort Order |
| unit_abbrev | Unit Abbreviation |
| unit_id | Unique ID |
| unit_name | Unit Name |



---

# WBSBUDG - (Spending and Benefit Plans)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| benefit_cost | Benefit Plan |
| proj_id | Project |
| spend_cost | Spending Plan |
| start_date | Date |
| wbs_budg_id | Unique ID |
| wbs_id | WBS |



---

# WBSMEMO - (EPS, Project and WBS Notebook)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| memo_type_id | Notebook Topic |
| proj_id | Project |
| wbs_id | WBS |
| wbs_memo | Notebook Description |
| wbs_memo_id | Unique ID |



---

# WBSRSRC_QTY - (WBSRSRC QTY)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| fin_dates_id1 | fin_dates_id1 |
| fin_dates_id2 | fin_dates_id2 |
| fin_qty1 | fin_qty1 |
| fin_qty2 | fin_qty2 |
| month_start | Unique ID |
| qty | qty |
| week_start | Unique ID |



---

# WBSSTEP - (WBS Milestones)


| P6 EPPM Field | P6 EPPM Column Name |
| --- | --- |
| complete_flag | Completed |
| proj_id | Project ID |
| seq_num | Sort Order |
| step_name | WBS Milestone |
| step_wt | Weight |
| wbs_id | WBS |
| wbs_step_id | Unique ID |
